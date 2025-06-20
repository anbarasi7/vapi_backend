import axios from "axios";
import { CallReportModel } from "../models/callrReportModel.js";
import { mongooseConnection } from "../config/mongooseConfig.js";
// const VAPI_API_KEY = "2e8fb729-d3a2-4138-b473-37a28497c5d0";
const backend_url = 'https://api-talkypies.vercel.app/'



export const createAssistant = async (req, res) => {
  const { childName, customPrompt , vapiKey="b2047282-7b8a-421b-b33d-7abfdbdddcfd" , prompt, toyName } = req.body;
  const VAPI_API_KEY = vapiKey || process.env.VAPI_API_KEY;
  
  let finalPrompt = `You are a kid assistant, who helps engage kids in a fun playful manner. Please be concise in your responses. Use very simple language that kids can understand and use short sentences. 
  Make sure to follow these instruction while replying: ${customPrompt || "Be friendly and helpful."}`;

  

  if(prompt) {
    finalPrompt = prompt;
    finalPrompt += `Make sure to follow these instruction while replying: ${customPrompt || "Be friendly and helpful."}`;
  }
  //           provider: "cartesia",
  //        voiceId: "3b554273-4299-48b9-9aaf-eefd438e3941",
          
   
  try {
    const response = await axios.post(
      "https://api.vapi.ai/assistant",
      {
        name: `Eva-${Date.now()}`,
        model: {
          provider: "openai",
          model: "gpt-4o",
          messages: [
            {
              role: "system",
              content:  finalPrompt,
            },
          ],
          temperature: 0.3,
        },
         silenceTimeoutSeconds: 30,
        voice: {
          provider: "vapi",
          voiceId: "Neha",
          speed: 0.8
        },
        transcriber: {
          provider: "deepgram",
          language: "en-IN"
        },
        backgroundDenoisingEnabled: true,
        stopSpeakingPlan: {
        backoffSeconds: 4
      },
        firstMessage: `Hi ${childName || "there"}! I am ${toyName || "Eva"}! How can I assist you today?`,
        firstMessageMode: "assistant-speaks-first",
        serverMessages: ["end-of-call-report", "function-call"],
        server: {
          url: `${backend_url}vapi/end-call-report`, // Optional webhook
        },
      },
      {
        headers: {
          Authorization: `Bearer ${VAPI_API_KEY}`,
        },
      }
    );
    // console.log("Assistant created:", response);

    res.json({ assistantId: response.data.id });
  } catch (error) {
    console.error("Error creating assistant:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to create assistant" });
  }
}

export const storeCallReport = async (req, res) => {
  // Ensure mongoose is connected
  await mongooseConnection();

  // console.log("Received request body:", req.body);
     if (req.body.message.type=="end-of-call-report") {
        const  callReport  = req.body.message;
        // console.log("Call Report:", callReport);
        try {
        await  CallReportModel.insertOne(callReport);
        console.log("Call report stored successfully");
            
            // Respond with success
          res.status(200).json({ message: "Call report stored successfully" });
            
        } catch (error) {
          console.error("Error storing call report:", error);
          res.status(500).json({ error: "Failed to store call report" });         
        }

} else {
    res.status(400).json({ error: "Invalid message type" });
  }
};

export const getSessions = async (req, res) => {
  try {
// Ensure mongoose is connected
    await mongooseConnection();

    
    const result = await CallReportModel.aggregate([
  {
    $project: {
      timestamp: 1,
      cost: 1,
      durationSeconds: 1,
      summary: 1,
      recordingUrl: 1,
      durationMinutes: 1
    }
  },
  {
    $facet: {
      data: [
        { $sort: { timestamp: -1 } },        // Sort by timestamp DESC
        { $limit: 20 },  
        {
          $project: {
            timestamp: 1,
            cost: 1,
            durationSeconds: 1,
            summary: 1,
            recordingUrl: 1
          }
        }
      ],
      totals: [
        {
          $group: {
            _id: null,
            totalCost: { $sum: "$cost" },
            totalMinutes: { $sum: "$durationMinutes" },
            totalSessions: { $sum: 1 }
          }
        }
      ]
    }
  }
]);

// Extracting final output
const callData = result[0]?.data || [];
const totals = result[0]?.totals[0] || { totalCost: 0, totalMinutes: 0, totalSessions: 0 };

res.status(200).json({callData, ...totals});

  } catch (error) {
      console.error("Error getting sessions:", error);
      res.status(500).json({ error: "Failed to get sessions" });
  }
};
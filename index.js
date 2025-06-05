// backend/index.js
import express from "express";
import axios from "axios";
import cors from "cors";
import { mongooseConnection } from "./config/mongooseConfig.js";
import vapiRoutes from "./routes/vapiRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the TalkyPIES Backend!  ");
});

app.use("/vapi", vapiRoutes);

// app.post("/create-assistant", async (req, res) => {
//   const { childName, customPrompt } = req.body;

//   try {
//     const response = await axios.post(
//       "https://api.vapi.ai/assistant",
//       {
//         name: `Eva-${Date.now()}`,
//         model: {
//           provider: "openai",
//           model: "gpt-3.5-turbo",
//           messages: [
//             {
//               role: "system",
//               content:  `You're a versatile AI assistant named Eva with a personality of a cat who is fun to talk with. 
//             Make sure to follow these instruction while replying: ${customPrompt || "Be friendly and helpful."}`,
//             },
//           ],
//         },
//         voice: {
//           provider: "cartesia",
//           voiceId: "3b554273-4299-48b9-9aaf-eefd438e3941",
//         },
//         firstMessage: `Hi ${childName || "there"}! I am Eva! How can I assist you today?`,
//         firstMessageMode: "assistant-speaks-first",
//         serverMessages: ["end-of-call-report", "function-call"],
//         server: {
//           url: "https://fc39-2405-201-300c-ae0-bc67-d66b-1c85-49fb.ngrok-free.app/vapi-inbound", // Optional webhook
//         },
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${VAPI_API_KEY}`,
//         },
//       }
//     );
//     // console.log("Assistant created:", response);

//     res.json({ assistantId: response.data.id });
//   } catch (error) {
//     console.error("Error creating assistant:", error.response?.data || error.message);
//     res.status(500).json({ error: "Failed to create assistant" });
//   }
// });


// // Add this to your existing Express backend
// app.post("/vapi-inbound", (req, res) => {
//     console.log("Incoming webhook from Vapi:");
//   const eventType = req.headers["x-vapi-event"]; // Check the type of incoming message
//   const payload = req.body;

//   console.log("Vapi webhook received:", eventType);

//   if (eventType === "end-of-call-report") {
//     const { callId, phoneNumber, duration, summary, transcript, startTime, endTime } = payload;

//     // Log or save to a database
//     console.log("📞 Call Ended:");
//     console.log(`🆔 Call ID: ${callId}`);
//     console.log(`📱 Caller: ${phoneNumber}`);
//     console.log(`⏱ Duration: ${duration} seconds`);
//     console.log(`📝 Summary: ${summary}`);
//     console.log(`📜 Transcript: ${transcript}`);
//     console.log(`🕒 Start: ${startTime}`);
//     console.log(`🕓 End: ${endTime}`);
//   }


//   if (req.body.message.type=="end-of-call-report") {
//     const { cost, costs, costBreakdown, durationMinutes } = payload.message;

//     // Log or save to a database
//     console.log("2-📞 Call Ended:");
//     // console.log("payload ***** payload ", payload);
//     console.log(`💰 Cost: ${cost}`);
//     console.log(`🕒 Duration: ${durationMinutes} minutes`);
// costs.forEach((cost, index) => {
//   console.log(`💸 Cost ${index + 1}:`, cost);
// });
// console.log("breaks *********************************************");

// costBreakdown.forEach((item, index) => {
//   console.log(`💵 Breakdown ${index + 1}:`, item);
// });

// }

//   // Always respond to webhook
//   res.status(200).send("OK");
// });


app.use((err, req, res, next) => {
  console.error("Error occurred:", err);
  res.status(500).json({ error: "Internal Server Error" });
}); 

const PORT = process.env.PORT || 5000;
app.listen(PORT,async () => {
  console.log(`Backend running on http://localhost:${PORT}`);
  await mongooseConnection();
});

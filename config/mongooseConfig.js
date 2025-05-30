import mongoose from "mongoose";

const uri = `mongodb+srv://sumit:Custom_619@realtyai.giipx.mongodb.net/robotics_voice_assistant?retryWrites=true&w=majority&appName=RealtyAI`

export const mongooseConnection = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw error; // Re-throw the error to be handled by the caller
    }
}
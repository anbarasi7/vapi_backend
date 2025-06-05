import mongoose from "mongoose";

const uri = `mongodb+srv://sumit:Custom_619@realtyai.giipx.mongodb.net/robotics_voice_assistant?retryWrites=true&w=majority&appName=RealtyAI`

// export const mongooseConnection = async () => {
//     try {
//         await mongoose.connect(uri, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("MongoDB connected successfully");
//     } catch (error) {
//         console.error("MongoDB connection error:", error);
//         throw error; // Re-throw the error to be handled by the caller
//     }
// }


let cached = global.mongoose || { conn: null, promise: null };

export async function mongooseConnection() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then((mongoose) => {
        console.log("MongoDB connected successfully");
      return mongoose;
    }).catch((error) => {
        console.error("MongoDB connection error:", error);
        throw error; // Re-throw the error to be handled by the caller
    });
  }

  cached.conn = await cached.promise;
  global.mongoose = cached;
  return cached.conn;
}

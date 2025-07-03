import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectdb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("❌ MongoDB connection error:", error.message);
        process.exit(1); // Exit process with failure
    }
};

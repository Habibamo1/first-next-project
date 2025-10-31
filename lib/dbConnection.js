
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
export async function connectDB() {
    try {
        if (mongoose.connection.readyState === 1) {
            console.log(" MongoDB already connected");
            return;
        }
        await mongoose.connect(MONGODB_URI, {
            dbName: "test",
        });
        console.log("Connected to database");

    } catch (error) {
        console.log("Error connecting to database:", error);
    }
}

import * as dotenv from "dotenv";
import mongoose from "mongoose";
import pg from "pg";
dotenv.config();
export const connectToMongoDb = async () => {
    try {
        await mongoose
            .connect(process.env.MONGODB_URL);
        return console.log("connected to MongoDB");
    }
    catch {
        return console.log("failed to connect to MongoDB");
    }
};
export const pool = new pg.Pool();
export const connectToPostgreSQL = async () => {
    try {
        await pool
            .connect();
        return console.log("connected to PostgreSQL");
    }
    catch {
        return console.log("failed to connect to PostgreSQL");
    }
};

import * as dotenv from "dotenv";
import mongoose from "mongoose";
import  pg  from "pg";
dotenv.config();

export const connectToMongoDb = () => {
  mongoose
    .connect(process.env.MONGODB_URL!)
    .then(() => console.log("connected to MongoDB"))
    .catch(() => console.log("failed to connect to MongoDB"));
};

export const pool = new pg.Pool();

export const connectToPostgreSQL = () => {
  pool
    .connect()
    .then(() => console.log("connected to PostgreSQL"))
    .catch(() => console.log("failed to connect to PostgreSQL"));
};
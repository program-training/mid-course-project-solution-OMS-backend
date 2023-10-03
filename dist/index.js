import cors from "cors";
import express from "express";
import { connectToMongoDb, connectToPostgreSQL } from "./Dal/connections.js";
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
    connectToMongoDb();
    connectToPostgreSQL();
});

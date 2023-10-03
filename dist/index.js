import cors from "cors";
import express from "express";
import { connectToMongoDb, connectToPostgreSQL } from "./Dal/connections.js";
import { ordersRouter } from "./routes/orders.js";
import { usersRouter } from "./routes/users.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/orders', ordersRouter);
app.use('/api/users', usersRouter);
const PORT = 8070;
await connectToMongoDb();
await connectToPostgreSQL();
app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
});

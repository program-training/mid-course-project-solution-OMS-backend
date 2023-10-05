import cors from "cors";
import express from "express";
import { connectToMongoDb, connectToPostgreSQL, pool } from "./Dal/connections.js";
import { ordersRouter } from "./routes/orders.js";
import { usersRouter } from "./routes/users.js";
import morgan from "morgan";
import { errorHandler } from "./controllers/errorHandeling.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

app.use('/api/orders',ordersRouter);
app.use('/api/users',usersRouter);
app.use(errorHandler);

const PORT = 8070;

await connectToMongoDb();
await connectToPostgreSQL();

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});

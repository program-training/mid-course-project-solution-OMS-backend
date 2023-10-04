import { Router } from "express";
import { addNewOrder, getAllOrders, getOrdersByUser, updateOrder } from "../controllers/orders.js";
import { validateToken } from "../controllers/auth.js";

export const ordersRouter = Router();

ordersRouter.get('/',getAllOrders);

ordersRouter.get('/:userId',getOrdersByUser);

ordersRouter.post('/',addNewOrder);

ordersRouter.put('/:orderId',validateToken,updateOrder);

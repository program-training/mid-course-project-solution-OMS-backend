import { Router } from "express";
import { addNewOrder, getAllOrders, getOrdersByUser, updateOrder } from "../controllers/orders.js";
import { validateToken } from "../controllers/auth.js";

export const ordersRouter = Router();

ordersRouter.get('/',validateToken,getAllOrders);

ordersRouter.get('/:userId',validateToken,getOrdersByUser);

ordersRouter.post('/',addNewOrder);

ordersRouter.put('/:orderId',validateToken,updateOrder);

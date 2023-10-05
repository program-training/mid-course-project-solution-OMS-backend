import { NextFunction, Request, Response } from "express";
import {
  addOrder,
  getOrders,
  getOrdersByUserId,
  updateOrderById,
} from "../Dal/orders.js";
import { removeFromInventory } from "../BL/orders.js";
import {
  genericError,
  productsNotInInventoryError,
} from "../BL/errorHandeling.js";

export const getAllOrders = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const orders = await getOrders();
    res.status(200).send(orders);
  } catch (error) {
    console.log(error);
    next(genericError((error as Error).message));
  }
};

export const getOrdersByUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = Number(req.params.userId);
    const orders = await getOrdersByUserId(userId);
    res.status(200).send(orders);
  } catch (error) {
    console.log(error);
    next(genericError((error as Error).message));
  }
};

export const addNewOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { order } = req.body;
  try {
    await removeFromInventory(order);
  } catch (error) {
    console.log(error);
    next(productsNotInInventoryError());
  }
  try {
    await addOrder(order);
    res.status(201).send(order);
  } catch (error) {
    console.log(error);
    next(genericError((error as Error).message));
  }
};

export const updateOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { orderId } = req.params;
    const { order } = req.body;
    const updatedOrder = await updateOrderById(orderId, order);
    res.status(200).send(updatedOrder);
  } catch (error) {
    console.log(error);
    next(genericError((error as Error).message));
  }
};

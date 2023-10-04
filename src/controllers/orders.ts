import { Request, Response } from "express";
import {
  addOrder,
  getOrders,
  getOrdersByUserId,
  updateOrderById,
} from "../Dal/orders.js";
import { removeFromInventory } from "../BL/orders.js";

export const getAllOrders = async (req: Request, res: Response) => {
  const orders = await getOrders();
  res.status(200).send(orders);
};

export const getOrdersByUser = async (req: Request, res: Response) => {
  const userId = Number(req.params.userId);
  const orders = await getOrdersByUserId(userId);
  res.status(200).send(orders);
};

export const addNewOrder = async (req: Request, res: Response) => {
  const { order } = req.body;
    try {
      await removeFromInventory(order);
    } catch (error) {
      res.status(500).send('colud not get products from enventory');
    }
    await addOrder(order);
    res.status(201).send(order);
  // const savedOrder = await addOrder(order);
  // res.status(201).send(savedOrder);
};

export const updateOrder = async (req: Request, res: Response) => {
  const { orderId } = req.params;
  const { order } = req.body;
  const updatedOrder = await updateOrderById(orderId, order);
  res.status(200).send(updatedOrder);
};

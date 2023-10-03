import { addOrder, getOrders, getOrdersByUserId, updateOrderById, } from "../Dal/orders.js";
import { checkOrder } from "../BL/orders.js";
export const getAllOrders = async (req, res) => {
    const orders = await getOrders();
    res.status(200).send(orders);
};
export const getOrdersByUser = async (req, res) => {
    const userId = Number(req.params.userId);
    const orders = await getOrdersByUserId(userId);
    res.status(200).send(orders);
};
export const addNewOrder = async (req, res) => {
    const { order } = req.body;
    const ERPResponse = await checkOrder(order);
    if (ERPResponse.cause)
        res.status(500).send(ERPResponse.cause);
    else {
        await addOrder(order);
        res.status(201).send(order);
    }
    // const savedOrder = await addOrder(order);
    // res.status(201).send(savedOrder);
};
export const updateOrder = async (req, res) => {
    const { orderId } = req.params;
    const { order } = req.body;
    const updatedOrder = await updateOrderById(orderId, order);
    res.status(200).send(updatedOrder);
};

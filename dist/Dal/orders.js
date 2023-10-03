import { OrderModel } from "./ordersSchemas/orderSchema.js";
export const addOrder = async (order) => {
    const newOrder = new OrderModel(order);
    await newOrder.save();
    return newOrder;
};
export const updateOrderById = async (orderId, updatedOrder) => {
    const updated = await OrderModel.findByIdAndUpdate(orderId, updatedOrder, {
        new: true,
    });
    return updated;
};
export const getOrders = async () => {
    const orders = await OrderModel.find({});
    return orders;
};
export const getOrdersByUserId = async (userId) => {
    const orders = await OrderModel.find({ userId: userId });
    return orders;
};

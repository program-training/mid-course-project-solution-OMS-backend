import { Order, OrderModel } from "./ordersSchemas/orderSchema.js";

export const addOrder = async (order:Order) => {
    const newOrder = new OrderModel(order);
    await newOrder.save();
    return newOrder;
}

export const updateOrderById = async (orderId: string, updatedOrder: Order) => {
    const updated = await OrderModel.findByIdAndUpdate(orderId, updatedOrder, {
      new: true,
    });
    return updated;
  };
  
  export const getOrders = async () => {
    const orders = await OrderModel.find({});
    return orders;
  };
  
  export const getOrdersByUserId = async (userId: number) => {
    const orders = await OrderModel.find({ userId: userId });
    return orders;
  };
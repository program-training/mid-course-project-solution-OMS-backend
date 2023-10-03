import axios from "axios";
import { Order } from "../Dal/ordersSchemas/orderSchema";
import * as dotenv from 'dotenv';


dotenv.config();
export const checkOrder = async (order:Order) =>{
    const response = await axios.post(`${process.env.API_GATEWAY_URL!}/api/shop_inventory`,order);
    return response.data;
}

export const removeFromInventory = async (order:Order) =>{
    const response = await axios.post(`${process.env.API_GATEWAY_URL!}/api/updateInventory`,order);
    return response.data;
}
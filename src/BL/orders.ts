import axios from "axios";
import { Order } from "../Dal/ordersSchemas/orderSchema.js";
import * as dotenv from 'dotenv';
dotenv.config();

dotenv.config();
// export const checkOrder = async (order:Order) =>{
//     const response = await axios.post(`${process.env.API_GATEWAY_URL!}/api/shop_inventory`,order);
//     return response.data;
// }

export const removeFromInventory = async (order:Order) =>{
    const url =`${process.env.API_GATEWAY_URL!}/api/shop_inventory/updateInventory`; 
    const response = await axios.post(url,order);
    return response.data;
}

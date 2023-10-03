import axios from "axios";
import { Order } from "../Dal/ordersSchemas/orderSchema";
import * as dotenv from 'dotenv';


dotenv.config();
export const checkOrder = async (order:Order) =>{
    const response = await axios.post(`${process.env.API_GATEWAY_URL!}/checkOrder`,order);
    return response.data;
}
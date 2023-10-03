import { Schema, model } from "mongoose";
import { Product, ProductSchema } from "./productSchema.js";
import { ShippingDetails, ShippingDetailsSchema} from "./shippingDetailsSchema.js";

export interface Order {
  cartItems: Product[];
  orderTime: Date;
  status: string;
  Price: number;
  shippingDetails: ShippingDetails;
}
interface OrderDocument extends Order, Document {}
const OrderSchema = new Schema<OrderDocument>({
  cartItems: {
    type: [ProductSchema],
    required: true,
  },
  orderTime: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  shippingDetails: {
    type: ShippingDetailsSchema,
    required: true,
  },
});

export const OrderModel = model<OrderDocument>('Order',OrderSchema)

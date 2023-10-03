import { Schema } from "mongoose";

export interface ShippingDetails {
  address: string;
  contactNumber: string;
  orderType: string;
}

interface ShippingDetailsDocument extends Document, ShippingDetails {}

export const ShippingDetailsSchema = new Schema<ShippingDetailsDocument>({
    address: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  orderType: {
    type: String,
    required: true,
  },
});

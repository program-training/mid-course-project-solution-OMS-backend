import { Schema } from "mongoose";


export interface Product{
    name:String,
    description:String,
    price:Number,
    quantity:Number,
}


interface ProductDocument extends Document,Product{}

export const ProductSchema  = new Schema<ProductDocument>({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
})
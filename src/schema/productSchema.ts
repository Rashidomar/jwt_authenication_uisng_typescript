import { object, string, number } from "zod";

export const createProductSchema = object({
        // name: string;
        // category_id : string;
        // price: number;
        // quantity: number;
    body : object({
        name: string({ required_error: "Name is required" }),
        category_id: string({ required_error: "Category_id is required" }),
        price: number({required_error: "Price is required" }),
        quantity: number({required_error: "Price is required" })
    })
})

export const updateProductSchema = object({
    body : object({
        name: string({ required_error: "Name is required" }),
        category_id: string({ required_error: "Category_id is required" }),
        price: number({required_error: "Price is required" }),
        quantity: number({required_error: "Price is required" })
    })
})
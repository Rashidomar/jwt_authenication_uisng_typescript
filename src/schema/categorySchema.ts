import { object, string } from "zod"

export const createCategorySchema = object({
    body : object({
        name: string({ required_error: "Name is required" }),
        description : string({required_error : "Description is required"})
        .min(10, "Description must be more than 4 characters")

    }),
});

export const updateCategorySchema = object({
    body : object({
        name: string({ required_error: "Name is required" })
        .min(4, "Name must be more than 4 characters"),
        description : string({required_error : "Description is required"})
        .min(10, "Description must be more than 4 characters")


    }),
});
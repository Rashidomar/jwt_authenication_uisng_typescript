import { object, string } from "zod"

export const createCategorySchema = object({
    body : object({
        name: string({ required_error: "Name is required" }),
        description : string({required_error : "Description is required"})
    }),
});
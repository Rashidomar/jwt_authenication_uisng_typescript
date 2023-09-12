import { object, string, AnyZodObject, ZodError } from "zod"

export const createUserSchema = object({
    body : object({
        name: string({ required_error: "Name is required" }),
        email : string({required_error : "Email is required"})
        .email("Not a valid email"),
        password : string({required_error : "password is required"})
        .min(4, "Password must be more than 4 characters")
        .max(8, "Password must be less than 8 characters")

    }),
});
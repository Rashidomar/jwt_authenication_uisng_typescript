import { object, string } from "zod"

export const createUserSchema = object({
    body : object({
        name: string({ required_error: "Name is required" })
        .min(4, "Name must be more than 4 characters"),
        email : string({required_error : "Email is required"})
        .email("Not a valid email"),
        password : string({required_error : "password is required"})
        .min(4, "Password must be more than 4 characters")
        .max(8, "Password must be less than 8 characters")

    }),
});

export const updateUserSchema = object({
    body : object({
        name: string({ required_error: "Name is required" })
        .min(4, "Name must be more than 4 characters")
        ,
    }),
});

export const loginUserSchema = object({
    body : object({
        email: string({ required_error : "Email is required"}),
        password : string({required_error : "password is required"})
        .min(4, "Password must be more than 4 characters")
        .max(8, "Password must be less than 8 characters")
    })
})
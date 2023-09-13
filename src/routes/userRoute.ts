import express from "express";
import {registerUser, getUsers, updateUser, deleteUser}  from "../controllers/userController"
import { createUserSchema, updateUserSchema } from "../schema/userSchema";
import { validate } from "../middleware/validateInputs";



const router = express.Router()

router.post("/signup", validate(createUserSchema), registerUser)
router.put("/edit_user/:userId", validate(updateUserSchema), updateUser)
router.delete("/delete_user/:userId", deleteUser)
router.get("/getUsers", getUsers)




export default router
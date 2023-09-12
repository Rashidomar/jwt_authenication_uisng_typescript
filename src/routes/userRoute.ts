import express from "express";
import {registerUser, getUsers}  from "../controllers/userController"
import { createUserSchema } from "../schema/userSchema";
import { validate } from "../middleware/validateInputs";



const router = express.Router()

router.post("/signup", validate(createUserSchema), registerUser)
router.get("/getUsers", getUsers)




export default router
import express from "express";
import {registerUser, getUsers}  from "../controllers/userController"



const router = express.Router()

router.post("/signup", registerUser)
router.get("/getUsers", getUsers)




export default router
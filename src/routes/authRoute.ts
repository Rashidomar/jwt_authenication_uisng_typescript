import { userLogin } from "../controllers/authController"
import express from "express"

const router = express.Router()


router.post("/login", userLogin)

export default router;



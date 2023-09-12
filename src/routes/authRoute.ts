import express from "express"
import { userLogin, userLogout } from "../controllers/authController"
import { loginUserSchema } from "../schema/userSchema"
import { validate } from "../middleware/validateInputs"

const router = express.Router()

router.post("/login", validate(loginUserSchema), userLogin)
router.get("/logout", userLogout)

export default router;



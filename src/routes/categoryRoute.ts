import express from "express";
import { addCategory } from "../controllers/categoryController";
import { createCategorySchema } from "../schema/categorySchema";
import { validate } from "../middleware/validateInputs";

const Router = express.Router()

Router.post("/add_category", validate(createCategorySchema), addCategory)

export default Router
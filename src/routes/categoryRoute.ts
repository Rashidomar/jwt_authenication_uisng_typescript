import express from "express";
import { addCategory, getCategories, getCategory } from "../controllers/categoryController";
import { createCategorySchema } from "../schema/categorySchema";
import { validate } from "../middleware/validateInputs";

const Router = express.Router()

Router.get("/get_category/:categoryId", getCategory)
Router.get("/get_allcategories", getCategories)
Router.post("/add_category", validate(createCategorySchema), addCategory)


export default Router
import express from "express";
import { addCategory, getCategories, getCategory, updateCategory, deleteCategory } from "../controllers/categoryController";
import { createCategorySchema, updateCategorySchema } from "../schema/categorySchema";
import { validate } from "../middleware/validateInputs";

const Router = express.Router()

Router.get("/get_category/:categoryId", getCategory)
Router.get("/get_allcategories", getCategories)
Router.post("/add_category", validate(createCategorySchema), addCategory)
Router.put("edit_category/:categoryId", validate(updateCategorySchema), updateCategory)
Router.delete("delete_category/:categoryId", deleteCategory)

export default Router
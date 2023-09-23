import express from "express";
import { addCategory, getCategories, getCategory, updateCategory, deleteCategory } from "../controllers/categoryController";
import { createCategorySchema, updateCategorySchema } from "../schema/categorySchema";
import { validate } from "../middleware/validateInputs";

const router = express.Router()

router.get("/get_category/:categoryId", getCategory)
router.get("/get_allcategories", getCategories)
router.post("/add_category", validate(createCategorySchema), addCategory)
router.put("edit_category/:categoryId", validate(updateCategorySchema), updateCategory)
router.delete("delete_category/:categoryId", deleteCategory)

export default router
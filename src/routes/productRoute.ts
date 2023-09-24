import express from "express";
import { addProduct, getProduct, getProducts, updateProduct, deleteProduct } from "../controllers/productController";
import { createProductSchema, updateProductSchema } from "../schema/productSchema";
import { validate } from "../middleware/validateInputs";

const router = express.Router()

router.get("/get_product/:productId", getProduct)
router.get("/get_allproducts", getProducts)
router.post("/add_product", validate(createProductSchema), addProduct)
router.put("edit_product/:productId", validate(updateProductSchema), updateProduct)
router.delete("delete_product/:productId", deleteProduct)

export default router
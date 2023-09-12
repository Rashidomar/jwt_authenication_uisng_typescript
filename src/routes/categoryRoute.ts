import express from "express";
import { addCategory } from "../controllers/categoryController";

const Router = express.Router()

Router.post("/add_category", addCategory)

export default Router
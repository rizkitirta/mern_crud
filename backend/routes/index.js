import express from "express";
import {
  getAllProduct,
  createProduct,
  getproductById,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/products", getAllProduct);
router.get("/product/:id", getproductById);
router.post("/create-product", createProduct);
router.patch("/update-product/:id", updateProduct);
router.patch("/delete-product/:id", deleteProduct);

export default router;

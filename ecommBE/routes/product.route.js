import express from "express";
import { addProduct, getProduct, listProducts, removeProduct } from "../controllers/product.controller.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router();

productRouter.post('/add', adminAuth, upload.fields([{name:'image1', maxCount:1}, {name:'image2', maxCount:1}, {name:'image3', maxCount:1}, {name:'image4', maxCount:1}]), addProduct);
productRouter.post('/remove', adminAuth, removeProduct);
productRouter.get('/list', adminAuth, listProducts);
productRouter.get('/get', adminAuth, getProduct); // *************************************



export default productRouter;
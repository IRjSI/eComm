import express from "express";
import { addToCart,updateCart,getCart } from "../controllers/cart.controller.js";
import userAuth from "../middleware/userAuth.js";

const cartRouter = express.Router();

cartRouter.post('/add', userAuth, addToCart);
cartRouter.post('/update', userAuth, updateCart);
cartRouter.post('/get', userAuth, getCart);

export default cartRouter;
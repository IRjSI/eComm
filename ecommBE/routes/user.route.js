import express from "express";
import { loginAdmin, loginUser, registerUser } from "../controllers/user.controller";

const userRouter = express.Router();

userRouter.post('/login', loginUser);
userRouter.post('/admin', loginAdmin);
userRouter.post('/signup', registerUser);

export default userRouter;
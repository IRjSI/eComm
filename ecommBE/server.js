import express from "express";
import cors from "cors";
import "dotenv/config";
import connectToDB from "./config/db.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/user.route.js";
import productRouter from "./routes/product.route.js";

const app = express();
const PORT = process.env.PORT || 4000;

connectToDB();
connectCloudinary()

app.use(cors());
app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/product', productRouter);

app.get('/', (req,res) => {
    res.send("Started")
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
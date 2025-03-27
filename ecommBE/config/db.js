import mongoose from "mongoose";

export default async function connectToDB() {
    return await mongoose.connect(process.env.MONGO_URI).then(() => console.log('Connected to DB'))
}
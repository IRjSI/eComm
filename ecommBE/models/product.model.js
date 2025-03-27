import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: Array,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    subCategory: {
        type: String,
        required: true
    },
    bestseller: {
        type: Boolean
    },
    sizes: {
        type: Array,
        required: true
    },
    date: {
        type: Number,
        required: true
    }
})

const ProductModel = mongoose.model('product', ProductSchema);

export default ProductModel;
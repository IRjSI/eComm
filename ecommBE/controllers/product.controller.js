import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { v2 as cloudinary } from "cloudinary";
import ProductModel from "../models/product.model.js";

const addProduct = async (req,res) => {
    try {
        const { name,price,description, category, subCategory, bestseller, sizes} = req.body;
        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];
    
        //we can't store images in database, therefore use cloudinary
        const images = [image1,image2,image3,image4].filter((item) => item !== undefined) // to not store undefined images
        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, {resource_type:'image'});
                return result.secure_url;
            })
        )
    
        const newProduct = await ProductModel.create({
            name,
            price:Number(price),
            description, 
            category, 
            subCategory, 
            bestseller: bestseller === "true" ? true : false, 
            sizes: JSON.parse(sizes), // previously it was string convert it to array
            image: imagesUrl,
            date: Date.now()
        });
    
        res.json({
            status: true,
            message: 'Product added'
        })
    } catch (error) {
        console.log(error);
        res.json({
            status: false,
            message: 'Error adding product'
        })
    }
}

const listProducts = async (req,res) => {
    try {
        const allProducts = await ProductModel.find({});

        res.json({
            status: true,
            data: allProducts
        })
    } catch (error) {
        console.log(error);
        res.json({
            status: false,
            message: 'Error listing products'
        })
    }
}

const removeProduct = async (req,res) => {
    try {
        const { id } = req.body;
        await ProductModel.findByIdAndDelete({ productId: id });
        res.json({
            status: true,
            message: 'Product removed'
        })
    } catch (error) {
        console.log(error);
        res.json({
            status: false,
            message: 'Error removing product'
        })
    }
}

const getProduct = async (req,res) => {
    try {
        const { productId } = req.body;
        const product = await ProductModel.findById({ productId });
        res.json({
            status: true,
            product
        })
    } catch (error) {
        console.log(error);
        res.json({
            status: false,
            message: 'Error listing product'
        })
    }
}

export { addProduct, removeProduct, getProduct, listProducts };
import UserModel from "../models/user.model.js";

const addToCart = async (req,res) => {
    try {
        const { userId, itemId, size } = req.body;

        const userData = await UserModel.findById( userId );
        let cartData = await userData.cartData;
        
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        await UserModel.findByIdAndUpdate(userId, { cartData });

        res.json({
            status: true,
            message: "Added to Cart"
        })
    } catch (error) {
        console.log(error);
        res.json({
            status: false,
            message: "Error adding to cart"
        })
    }
}

const updateCart = async (req,res) => {
    try {
        const { userId, itemId, size, quantity } = req.body;
        const userData = await UserModel.findById(userId);
        let cartData = await userData.cartData;
        
        cartData[itemId][size] = quantity;
        
        await UserModel.findByIdAndUpdate(userId, { cartData });
        
        res.json({
            status: true,
            message: "Cart Updated"
        })
    } catch (error) {
        console.log(error);
        res.json({
            status: false,
            message: "Error updating Cart"
        })
    }
}

const getCart = async (req,res) => {
    try {
        const { userId } = req.body;
        const userData = await UserModel.findById(userId);
        let cartData = await userData.cartData;
        
        res.json({
            status: true,
            cartData
        })
        
    } catch (error) {
        console.log(error);
        res.json({
            status: false,
            message: "Error getting Cart"
        })
    }
}

export { addToCart, updateCart, getCart };
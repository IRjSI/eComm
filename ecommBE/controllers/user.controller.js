import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../models/user.model.js";

const loginUser = async (req,res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.json({
                status: false,
                message: 'User not found'
            })
        }        
        
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.json({
                status: false,
                message: 'Invalid credentials'
            })
        }
        
        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET);
       
        res.json({
            status: true,
            token
        })
    } catch (error) {
        console.log(error);
        res.json({
            status: false,
            message: 'Error loging-in'
        })
    }
}

const registerUser = async (req,res) => {
    try {
        const { email,name,password } = req.body;
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {            
            return res.json({
                status: false,
                message: 'User already exists'
            })
        }

        if (!validator.isEmail(email)) {
            return res.json({
                status: false,
                message: 'Invalid email'
            })
        }
        if (password.length < 8) {
            return res.json({
                status: false,
                message: 'Weak password'
            })
        }

        const hashedPassword = await bcrypt.hash(password,10);
        
        const newUser = await UserModel.create({
            name,
            email,
            password: hashedPassword
        })

        const token = jwt.sign({userId: newUser._id},process.env.JWT_SECRET);

        res.json({
            status: true,
            token: token
        })

    } catch (error) {
        console.log(error);
        return res.json({
            status: false,
            message: 'Error regisering user'
        })
    }
}

const loginAdmin = async (req,res) => {
    try {
        const { email, password } = req.body;
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email+password,process.env.JWT_SECRET);
            res.json({
                status: true,
                token
            })
        } else {
            res.json({
                status: false,
                message: 'Invalid Credentials'
            })
        }
    } catch (error) {
        console.log(error);
        res.json({
            status: false,
            message: 'Invalid Credentials'
        })
    }
}

export { loginUser, loginAdmin, registerUser}
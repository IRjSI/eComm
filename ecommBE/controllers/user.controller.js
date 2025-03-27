import validator from "validator";
import UserModel from "../models/user.model";

const loginUser = (req,res) => {
    const { email, password } = req.body;
    
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

        
    } catch (error) {
        console.log(error);
        return res.json({
            status: false,
            message: 'Error regisering user'
        })
    }
}

const loginAdmin = (req,res) => {

}

export { loginUser, loginAdmin, registerUser}
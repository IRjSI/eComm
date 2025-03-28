import jwt from "jsonwebtoken";

export default async function adminAuth(req,res,next) {
    try {
        const { token } = req.headers;
        
        if (!token) {
            return res.json({
                status: false,
                message: 'Unauthorized admin token not found'
            })
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        
        if (decoded !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({
                status: false,
                message: 'Unauthorized admin'
            })
        }
        
        next();
    } catch (error) {
        console.log(error);
        res.json({
            status: false,
            message: 'Error::unauthorized admin'
        })
    }
}
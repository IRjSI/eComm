import jwt from "jsonwebtoken";

export default async function userAuth(req,res,next) {
    try {
        const { token } = req.headers;
        
        if (!token) {
            return res.json({
                status: false,
                message: 'Unauthorized user token not found'
            })
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        
        req.body.userId = decoded._id; // ****************
        
        next();
    } catch (error) {
        console.log(error);
        res.json({
            status: false,
            message: 'Error::unauthorized user'
        })
    }
}
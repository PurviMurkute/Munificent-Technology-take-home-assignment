import jwt from 'jsonwebtoken';
import dotenv from "dotenv"
dotenv.config()

const verifyJwt = async (req, res, next) => {
    const { authorization } = req.headers;

    if(!authorization){
        return res.status(400).json({
            success: false,
            data: null,
            message: "Authorization is required"
        })
    }

    try{
        const jwtToken = await authorization.split(" ")[1];
        const decoded = await jwt.verify(jwtToken, process.env.JWT_SECRET);
        
        req.user = decoded;
        next();
    }catch(e){
        return res.status(400).json({
            success: false,
            data: null,
            message: e?.message
        })
    }
}

export default verifyJwt;
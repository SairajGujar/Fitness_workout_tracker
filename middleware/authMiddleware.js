import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();
export async function authenticate(req, res, next) {
    try {
        const token = req.headers['authorization'].split(' ')[1];
        if(jwt.verify(token, process.env.JWT_SECRET_KEY)){
            next();
        }
        return res.status(401)
    } catch (error) {
        console.log(error.message)
        return res.status(500)
    }
}
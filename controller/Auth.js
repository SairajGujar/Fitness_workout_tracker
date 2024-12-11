import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import User from '../model/User.js'


export async function Login (req, res) {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email: email});
        if(!user){
            return res.status(404).json("not found");
        }
        if(!await bcrypt.compare(password, user.password)) return res.status(401).json("invalid password");
        const token = jwt.sign({
            email: email,
            password: password
        }, process.env.JWT_SECRET_KEY);
        
        return res.status(200).json({token:token});

    } catch (error) {
        console.log(error.message);
        return res.status(500).json(error.message);
    }
}

export async function Signup(req, res) {
    try {
        const {email, password} = req.body;
        if(!email||!password) {
            return res.json("invalid email or password");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword)
        await User.create({
            email: email,
            password: hashedPassword
        })
        return res.status(201).json("success");
    } catch (error) {
        console.log(error.message)
        return res.status(500).json(error.message);
    }
}
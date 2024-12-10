import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config();
export default function dbConnect(){
    mongoose.connect(process.env.MONGO)
    .then(()=>{
        console.log("connected to Database")
    })
    .catch(err=>console.log(err.message))
}
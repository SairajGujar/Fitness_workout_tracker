import express from 'express';
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import dbConnect from './config/dbConnect.js';
import authRoute from './router/authRoute.js';
import userRoute from './router/userRoute.js';
import { authenticate } from './middleware/authMiddleware.js';
dotenv.config();
const app = express();
app.use(bodyParser.json())
app.use('/auth', authRoute);
app.use('/user', authenticate, userRoute);
app.listen(process.env.PORT, ()=>{
    console.log(`listening on ${process.env.PORT}`);
    dbConnect();
})


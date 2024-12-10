import express from 'express';
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import dbConnect from './config/dbConnect.js';
import authRoute from './router/authRoute.js';

dotenv.config();
const app = express();
app.use(bodyParser.json())

app.listen(process.env.PORT, ()=>{
    console.log(`listening on ${process.env.PORT}`);
    dbConnect();
})

app.use('/auth', authRoute);
import dotenv from 'dotenv'
import axios from 'axios';
import dbConnect from './config/dbConnect.js';
import Exercise from './model/Exercise.js'
import mongoose from 'mongoose';

dotenv.config();

async function getExercises(req, res){
    try {
        const response = await axios.get(`https://exercisedb.p.rapidapi.com/exercises?limit=20`,{
            headers:{
                'X-RapidAPI-Key': process.env.API_KEY
            }
        });
        const data = response.data;
        console.log(data);
        dbConnect();
        const Exercises = data.map((exercise)=>{
            return {
                name: exercise.name,
                description:exercise.instructions,
                muscle_group:exercise.target
            }
        })
        console.log(Exercises);
        await Exercise.insertMany(Exercises);
        console.log("Data seeded successfully")
        process.exit(1);
        

    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}
getExercises();





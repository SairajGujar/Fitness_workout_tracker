import mongoose from "mongoose";
import {format} from 'date-fns'

const WorkoutPlan = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    name:{
        type:String,
        required:true,
        unique:true
    },
    plan: {
        type: [
          {
            exercise: {
              type: String,
              required: true,
            },
            sets: {
              type: Number,
              required: true,
            },
            reps: {
              type: Number,
              required: true,
            }
          }
        ],
        required: true
      },      
    schedule:{
        type:String,
        default:format(Date.now(), 'dd/MM/yyyy')
    },
    comments:{
        type:[String],
        default:[]
    },
    status:{
        type: String,
        enum: ['complete', 'pending'],
        required:true
    }
})

export const WorkoutSchema = mongoose.model('WorkoutPlan', WorkoutPlan)
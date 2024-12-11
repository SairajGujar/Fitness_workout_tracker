import mongoose from "mongoose";

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
        type:Date,
        default:Date.now()
    },
    comments:{
        type:[String],
        default:[]
    },
    status:{
        type: String,
        enum: ['active', 'pending'],
        required:true
    }
})

export const WorkoutSchema = mongoose.model('WorkoutPlan', WorkoutPlan)
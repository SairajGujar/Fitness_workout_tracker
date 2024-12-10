import mongoose from "mongoose";

const Exercise = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:Array,
    },
    muscle_group:{
        type:String,
    }
})

export default mongoose.model("Exercise", Exercise)
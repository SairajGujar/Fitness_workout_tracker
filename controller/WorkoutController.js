// import WorkoutPlan from '../model/WorkoutPlan.js'
import jwt from "jsonwebtoken";
import { WorkoutSchema } from "../model/WorkoutPlan.js";
import User from "../model/User.js";
export async function getAllWorkout(req, res) {
  try {
    const workouts = await WorkoutSchema.find({});
    const currentUser = await getCurrentUser(req);
    console.log(currentUser)
    const userWorkouts = workouts.filter(workout=>workout.user==currentUser.id);
    return res.status(200).json(userWorkouts);
  } catch (error) {
    console.log(error.message);
    return res.status(500)
  }
}

async function getCurrentUser(req) {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    const { email } = jwt.decode(token);
    const user = await User.findOne({ email: email });
    return user
  } catch (error) {
    console.log(error.message);
  }
}

export async function createWorkout(req, res) {
  try {
    const { name, plan } = req.body;
    const token = req.headers["authorization"].split(" ")[1];
    const { email } = jwt.decode(token);
    const user = await User.findOne({ email: email });
    const workout = {
      user: user.id,
      name,
      plan,
      status: "active",
    };
    await WorkoutSchema.create(workout);
    return res.status(201).json(workout);
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
}

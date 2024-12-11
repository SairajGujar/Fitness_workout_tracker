import express from 'express';
import {createWorkout, getAllWorkout} from '../controller/WorkoutController.js'
const router = express.Router();

router.post('/createPlan', createWorkout)
router.get('/Workouts', getAllWorkout)
export default router;
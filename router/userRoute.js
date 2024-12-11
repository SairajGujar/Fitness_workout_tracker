import express from 'express';
import {createWorkout, deleteWorkout, getAllWorkout, scheduleWorkout, updateWorkout} from '../controller/WorkoutController.js'
const router = express.Router();

router.post('/createPlan', createWorkout)
router.get('/Workouts', getAllWorkout)
router.post('/update', updateWorkout);
router.delete('/delete', deleteWorkout);
router.post('/schedule', scheduleWorkout);
export default router;
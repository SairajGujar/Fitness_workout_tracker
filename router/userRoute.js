import express from 'express';
import {createWorkout, deleteWorkout, generateReport, getAllWorkout, scheduleWorkout, updateWorkout} from '../controller/WorkoutController.js'
const router = express.Router();

router.post('/createPlan', createWorkout)
router.get('/workouts', getAllWorkout)
router.post('/update', updateWorkout);
router.delete('/delete', deleteWorkout);
router.post('/schedule', scheduleWorkout);
router.get('/report', generateReport);
export default router;
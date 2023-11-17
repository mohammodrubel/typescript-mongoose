import express from 'express';
import { studentInformation } from './studentController';
const router = express.Router();

router.post('/create-student', studentInformation.createStudent);
router.get('/create-student', studentInformation.getStudents);
router.get('/create-student/:id', studentInformation.getSingleStudents);

export const studentsRoute = router;

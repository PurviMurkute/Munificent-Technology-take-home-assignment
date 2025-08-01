import express from 'express';
import { getCourses, postCourse } from '../controllers/course.js';
const courseRouter = express.Router();

courseRouter.post('/courses', postCourse);
courseRouter.get('/courses', getCourses)

export default courseRouter;
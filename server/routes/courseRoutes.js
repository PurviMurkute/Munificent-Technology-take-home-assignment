import express from 'express';
import { enrollCourse, getCourses, getEnrolledCoursesByStudent, postCourse } from '../controllers/course.js';
const courseRouter = express.Router();
import verifyJwt from '../middleware/jwt.js';

courseRouter.post('/courses', postCourse);
courseRouter.get('/courses', getCourses)
courseRouter.put('/enroll/:courseId', verifyJwt, enrollCourse)
courseRouter.get("/enrollments/:studentId", verifyJwt, getEnrolledCoursesByStudent)

export default courseRouter;
import express from 'express';
import { postSignIn, postSignup } from '../controllers/student.js';
const studentRouter = express.Router();

studentRouter.post('/signup', postSignup);
studentRouter.post('/signin', postSignIn);

export default studentRouter;
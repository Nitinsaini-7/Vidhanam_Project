

import express from 'express'
import { adminLogin, loginUser, signupUser } from '../controllers/userController.js';
// import { loginUser, registerUser, adminLogin } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post('/signup', signupUser);
userRouter.post('/login', loginUser)
userRouter.post('/admin', adminLogin)

export default userRouter;

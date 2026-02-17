import express from "express";
import { getUserById, getUserResumes, logout, register, userLogin } from "../controllers/user.controller.js";
import isAUthenticated from "../middleware/isAUthenticated.js";

const userRouter = express.Router();

userRouter.post('/register', register);
userRouter.post('/login', userLogin);
userRouter.get('/data',isAUthenticated, getUserById);
userRouter.get('logout', logout);
userRouter.get('/resumes', isAUthenticated, getUserResumes);

export default userRouter;
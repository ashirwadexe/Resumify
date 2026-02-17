import express from 'express';
import isAUthenticated from '../middleware/isAUthenticated.js';
import { createResumes, deleteResume, getResumeById, updateResume } from '../controllers/resume.controller.js';
import upload from '../middleware/multer.js';

const resumeRouter = express.Router();

resumeRouter.post('/create', isAUthenticated, createResumes);
resumeRouter.put('/update', upload.single('image'),isAUthenticated, updateResume);
resumeRouter.delete('/delete/:resumeId', isAUthenticated, deleteResume);
resumeRouter.get('/get/:resumeId', isAUthenticated, getResumeById);
resumeRouter.get('/public/:resumeId', getResumeById);

export default resumeRouter;
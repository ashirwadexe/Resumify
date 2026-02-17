import express from 'express';
import isAUthenticated from '../middleware/isAUthenticated.js';
import { enhanceJobDescription, enhanceProfessionalSummary, uploadResume } from '../controllers/ai.controller.js';

const aiRouter = express.Router();

aiRouter.post('/enhance-pro-sum', isAUthenticated, enhanceProfessionalSummary);
aiRouter.post('/enhance-job-desc', isAUthenticated, enhanceJobDescription);
aiRouter.post('/upload-resume', isAUthenticated, uploadResume);

export default aiRouter;
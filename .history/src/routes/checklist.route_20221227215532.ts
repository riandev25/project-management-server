import { Router } from 'express';
import { Checklist } from '../models/checklist.model';
import asyncHandler from 'express-async-handler';
import { addChecklist } from '../controllers/checklist/addChecklist.controller';

const router = Router();

router.post('', addChecklist);

export default router;

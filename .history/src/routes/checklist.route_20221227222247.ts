import { Router } from 'express';
import { Checklist } from '../models/checklist.model';
import asyncHandler from 'express-async-handler';
import { addChecklist } from '../controllers/checklist/addChecklist.controller';
import { getChecklist } from '../controllers/checklist/getChecklist.controller';

const router = Router();

router.post('', addChecklist);
router.get('', getChecklist);

export default router;

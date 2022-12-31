import { Router } from 'express';
import authRouter from './auth.route';
import checklistRouter from './checklist.route';
import labelRouter from './label.route';
import boardRouter from './board';

import { connectToSessions } from '../database/mongodb';
import { connectToBoards } from '../database/mongodb';

const router = Router();

router.use(connectToSessions, connectToBoards);

router.use('/auth', authRouter);
router.use('/checklists', checklistRouter);
router.use('/labels', labelRouter);
router.use('/board', boardRouter);

export default router;

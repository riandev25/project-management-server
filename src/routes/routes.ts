import { Router } from 'express';
import authRouter from './auth.route';
import boardRouter from './board.route';
import cardRouter from './card.route';
import checklistRouter from './checklist.route';
import labelRouter from './label.route';

import { connectToSessions } from '../database/mongodb';
import { connectToBoards } from '../database/mongodb';

const router = Router();

router.use(connectToSessions, connectToBoards);

router.use('/auth', authRouter);
router.use('/boards', boardRouter);
router.use('/checklists', checklistRouter);
router.use('/labels', labelRouter);
router.use('/cards', cardRouter);

export default router;

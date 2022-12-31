import { Router } from 'express';
import authRouter from './route.auth';
import checklistRouter from './route.checklist';
import boardRouter from './board';

import { connectToSessions } from '../database/mongodb';
import { connectToBoards } from '../database/mongodb';

const router = Router();

router.use(connectToSessions, connectToBoards);

// router.get('', (req, res) => {
//   res.status(200).send('Home page');
// });
router.use('/auth', authRouter);
router.use('/checklists', checklistRouter);
router.use('/board', boardRouter);

export default router;

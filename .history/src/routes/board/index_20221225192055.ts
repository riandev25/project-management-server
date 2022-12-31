import { Router } from 'express';
import mongoose from 'mongoose';
// import { connectToBoards } from '../../database/mongodb';
import asyncHandler from 'express-async-handler';
import { Board } from '../../models/Board';
import { authenticateUser } from '../../middlewares/authenticate';

const router = Router();

router.use(authenticateUser);

router.post(
  '/protected',
  asyncHandler(async (req, res, next) => {
    const boardDb = await Board.insertMany(req.body);
    res.send(boardDb);
  })
);

router.get('/:boardCode/:projectName', (req, res) => {
  const { boardCode, projectName } = req.params;
  res.status(200).send(`${boardCode}, ${projectName}`);
});

export default router;

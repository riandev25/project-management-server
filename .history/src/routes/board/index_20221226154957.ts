import { Router } from 'express';
import mongoose from 'mongoose';
// import { connectToBoards } from '../../database/mongodb';
import asyncHandler from 'express-async-handler';
import { Board } from '../../models/board';
import { authenticateUser } from '../../middlewares/authenticate';

const router = Router();

router.use(authenticateUser);

// router.get('/', )

router.post(
  '/protected',
  asyncHandler(async (req, res, next) => {
    const boardDb = await Board.insertMany(req.body);
    res.send(boardDb);
  })
);

router.get(
  '/protected',
  asyncHandler(async (req, res, next) => {
    const boardDb = await Board.find({ cardTitle: 'Example' });
    res.send(boardDb);
  })
);

router.put(
  '/protected',
  asyncHandler(async (req, res, next) => {
    const boardDb = await Board.updateOne(
      { cardTitle: 'Example' },
      { $set: { cardTitle: 'Changed' } }
    );
    res.send(boardDb);
  })
);

router.get('/:boardCode/:projectName', (req, res) => {
  const { boardCode, projectName } = req.params;
  res.status(200).send(`${boardCode}, ${projectName}`);
});

export default router;

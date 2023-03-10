import asyncHandler from 'express-async-handler';
import { Board } from '../../models/board.model';

export const createBoard = asyncHandler(async (req, res, next) => {
  const label = await Board.insertMany(req.body);
  res.status(201).send(label);
  next();
});

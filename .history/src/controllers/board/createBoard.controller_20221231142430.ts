import asyncHandler from 'express-async-handler';
import { Board } from '../../models/board.model';

export const createBoard = asyncHandler(async (req, res, next) => {
  const apiKey = req.headers['api-key'];
  const board = await Board.insertMany({ ...req.body, apiKey });
  res.status(201).send(board);
  next();
});

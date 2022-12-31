import asyncHandler from 'express-async-handler';
import { Board } from '../../models/board.model';

export const getBoard = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  // const { cardName, idBoard } = req.query;

  const apiKey = req.headers['api-key'];
  const board = await Board.find({ apiKey });
  res.status(200).send(board);
  next();
});

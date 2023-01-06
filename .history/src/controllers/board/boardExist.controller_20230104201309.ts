import asyncHandler from 'express-async-handler';
import { Board } from '../../models/board.model';

export const boardExist = asyncHandler(async (req, res, next) => {
  const { cardName } = req.query;

  // Default query to database
  const query = { cardName };

  const board = await Board.find(query);
  res.status(200).send(board);
  next();
});

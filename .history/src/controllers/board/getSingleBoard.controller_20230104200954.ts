import asyncHandler from 'express-async-handler';
import { Board } from '../../models/board.model';

export const getSingleBoard = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  // const { cardName, idBoard } = req.query;

  // Default query to database
  const defaultQuery = { id };

  const board = await Board.findById(id);
  res.status(200).send(board);
  next();
});

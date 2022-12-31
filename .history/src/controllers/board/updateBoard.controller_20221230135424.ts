import asyncHandler from 'express-async-handler';
import { Board } from '../../models/board.model';

export const updateCard = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const query = { id };
  const update = { ...req.body };

  const board = await Board.findByIdAndUpdate(query, update);
  res.status(204).send(board);
  next();
});

import asyncHandler from 'express-async-handler';
import { Board } from '../../models/board.model';

export const deleteBoard = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const board = await Board.findByIdAndDelete(id);
  // const idBoard = board._id

  // // Delete lists
  // await List.deleteMany({idBoard});

  res.status(204).send(board);
  next();
});

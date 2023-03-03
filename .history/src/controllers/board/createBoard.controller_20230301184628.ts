import asyncHandler from 'express-async-handler';
import { Board } from '../../models/board.model';

export const createBoard = asyncHandler(async (req, res, next) => {
  // const headerApiKey = String(req.headers['x-api-key']);
  if (req.user) {
    const board = await Board.insertMany({
      ...req.body,
      owner: req.User._id,
    });
    res.status(201).send(board);
    next();
  }
});

import asyncHandler from 'express-async-handler';
import { Board } from '../../models/board.model';

export const createBoard = asyncHandler(async (req, res, next) => {
  const headerApiKey = String(req.headers['x-api-key']);
  if (headerApiKey) {
    const board = await Board.insertMany({
      ...req.body,
      // apiKey: headerApiKey,
    });
    res.status(201).send(board);
    next();
  }
});

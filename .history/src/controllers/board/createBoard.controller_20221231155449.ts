import asyncHandler from 'express-async-handler';
import { Board } from '../../models/board.model';
import { hashData } from '../../utils/passwordHelper';

export const createBoard = asyncHandler(async (req, res, next) => {
  const apiKey = String(req.headers['x-api-key']);
  const hashedApiKey = hashData(apiKey);
  const board = await Board.insertMany({ ...req.body, apiKey });
  res.status(201).send(board);
  next();
});

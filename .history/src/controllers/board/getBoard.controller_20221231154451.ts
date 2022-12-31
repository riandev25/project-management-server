import asyncHandler from 'express-async-handler';
import { Board } from '../../models/board.model';
import { hashData } from '../../utils/passwordHelper';

export const getBoard = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  // const { cardName, idBoard } = req.query;

  const apiKey = String(req.headers['x-api-key']);
  const hashedApiKey = hashData(apiKey);
  const board = await Board.find({ apiKey: hashedApiKey });
  res.status(200).send(board);
  next();
});

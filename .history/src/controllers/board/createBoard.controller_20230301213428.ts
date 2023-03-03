import asyncHandler from 'express-async-handler';
import { Board } from '../../models/board.model';

interface IUser extends Express.User {
  _id: string;
}

export const createBoard = asyncHandler(async (req, res, next) => {
  // const headerApiKey = String(req.headers['x-api-key']);
  const user = req.user as any;
  if (user) {
    const board = await Board.insertMany({
      ...req.body,
      owner: user._id,
    });
    res.status(201).send(board);
    next();
  }
});

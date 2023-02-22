import asyncHandler from 'express-async-handler';
import { Board } from '../../models/board.model';
import { User } from '../../models/user.model';
import { compareData, hashData } from '../../utils/passwordHelper';

interface INewUser extends Express.User {
  apiKey: string;
}

export const getBoard = asyncHandler(async (req, res, next) => {
  // const apiKey = String(req.headers['x-api-key']);
  const user = req.user as INewUser;
  console.log(user.apiKey);

  // Query
  const query = { apiKey: user.apiKey };

  // Returned Data
  const returned = { apiKey: 0 };

  if (user.apiKey) {
    const board = await Board.find(query, returned);
    res.status(200).send(board);
    next();
  }
});

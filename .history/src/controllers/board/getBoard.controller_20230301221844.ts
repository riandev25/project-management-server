import asyncHandler from 'express-async-handler';
import { Board } from '../../models/board.model';

interface IUser extends Express.User {
  _id: string;
}

export const getBoard = asyncHandler(async (req, res, next) => {
  // const apiKey = String(req.headers['x-api-key']);
  // const user = req.user as INewUser;
  // console.log(user.apiKey);
  const user = req.user as any;

  // Query
  console.log(user._id);
  const query = { owner: user._id };

  // Returned Data
  const returned = { owner: 0 };

  if (req.user) {
    const board = await Board.find(query, returned);
    res.status(200).send(board);
    next();
  }
});

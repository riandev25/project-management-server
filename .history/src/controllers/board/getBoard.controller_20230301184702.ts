import asyncHandler from 'express-async-handler';
import { Board } from '../../models/board.model';

interface INewUser extends Express.User {
  apiKey: string;
}

export const getBoard = asyncHandler(async (req, res, next) => {
  // const apiKey = String(req.headers['x-api-key']);
  // const user = req.user as INewUser;
  // console.log(user.apiKey);

  // Query
  const query = { owner: req.User._id };

  // Returned Data
  const returned = { owner: 0 };

  if (req.user) {
    const board = await Board.find(query, returned);
    res.status(200).send(board);
    next();
  }
});

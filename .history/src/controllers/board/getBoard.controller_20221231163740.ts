import asyncHandler from 'express-async-handler';
import { Board } from '../../models/board.model';
import { User } from '../../models/user.model';
import { compareData, hashData } from '../../utils/passwordHelper';

export const getBoard = asyncHandler(async (req, res, next) => {
  const rawApiKey = String(req.headers['x-api-key']);
  // const hashedApiKey = hashData(apiKey);
  const authenticate = await User.findOne(req.user);
  const hashedApiKey = String(authenticate?.apiKey);
  const authenticateApikey = compareData(rawApiKey, hashedApiKey);

  console.log(req.apiKey);

  // Query
  const query = { apiKey: hashedApiKey };

  // Returned Data
  const returned = { apiKey: 0 };

  if (authenticateApikey) {
    const board = await Board.find(query, returned);
    res.status(201).send(board);
    next();
  }
  next();
});

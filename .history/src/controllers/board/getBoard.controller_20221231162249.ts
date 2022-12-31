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

  // Query
  const query = { apiKey: hashedApiKey };

  // Returned Data
  const returned = { projection: { _id: 1, boardName: 1 } };

  if (authenticateApikey) {
    const board = await Board.find(query);
    res.status(201).send(board);
    next();
  }
  next();
});

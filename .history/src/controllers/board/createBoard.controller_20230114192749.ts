import asyncHandler from 'express-async-handler';
import { Board } from '../../models/board.model';
import { User } from '../../models/user.model';
import { compareData } from '../../utils/passwordHelper';

export const createBoard = asyncHandler(async (req, res, next) => {
  const rawApiKey = String(req.headers['x-api-key']);
  // const hashedApiKey = hashData(apiKey);
  const authenticate = await User.findOne(req.user);
  const hashedApiKey = String(authenticate?.apiKey);
  const authenticateApikey = compareData(rawApiKey, hashedApiKey);
  if (authenticateApikey) {
    const board = await Board.insertMany({ ...req.body, apiKey: hashedApiKey });
    res.status(201).send({ board, user: req.user });
    next();
  }
});

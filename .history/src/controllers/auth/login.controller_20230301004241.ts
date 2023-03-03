import asyncHandler from 'express-async-handler';
import { getToken } from '../../strategies/jwt.strategy';

export const loginuser = asyncHandler(async (req, res, next) => {
  const token = getToken({ _id: req.User._id });
  res
    .status(201)
    .send({
      success: true,
      token: token,
      status: 'You are successfully logged in!',
    });
  next();
});

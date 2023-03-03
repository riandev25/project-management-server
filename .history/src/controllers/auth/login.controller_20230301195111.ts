import asyncHandler from 'express-async-handler';
import { getToken } from '../../strategies/jwt.strategy';

export const loginUser = asyncHandler(async (req, res, next) => {
  console.log(req.user);
  if (req.user) {
    const user = req.user as any;
    const _id = user._id;
    console.log(_id);
    const token = getToken({ _id });
    res.status(201).send({
      success: true,
      token: token,
      status: 'You are successfully logged in!',
      user: req.user,
    });
  }
  next();
});

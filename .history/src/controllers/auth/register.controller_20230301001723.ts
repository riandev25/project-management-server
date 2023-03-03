import { NextFunction, Request, Response } from 'express';
import passport from 'passport';
import { UserJwt } from '../../models/user.jwt.model';
import asyncHandler from 'express-async-handler';

export const registerUser = asyncHandler(async (req, res, next) => {
  const registerUser = await UserJwt.register(
    new UserJwt({ username: req.body.username, apikey: req.User.apiKey }),
    req.body.password
  );
  if (registerUser) {
    passport.authenticate('local')(req, res, () => {
      res
        .status(201)
        .send({ success: true, status: 'Registration Successful!' });
    });
  }
  next();
});

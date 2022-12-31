// let jwt = require('jsonwebtoken')
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

export const ensureToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  var bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    try {
      jwt.verify(bearerToken, 'secretkey');
      next();
    } catch (err) {
      res.status(403);
    }
  } else {
    res.sendStatus(403);
  }
};

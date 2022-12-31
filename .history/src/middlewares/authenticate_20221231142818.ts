import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import { User } from '../models/user.model';

// export const authenticateUser = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   console.log('inside auth check middleware');
//   // console.log(req.user);
//   if (req.user) next();
//   else res.send(401);
// };

export const authenticateUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    console.log('inside auth check middleware');
    console.log(req.user);
    const apiKey = req.headers['x-api-key'];
    // const custom = req.user?.email
    const authenticateApiKey = await User.findOne({ apiKey });
    if (req.user && authenticateApiKey) next();
    else res.send(401);
  }
);

import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import { User } from '../models/user.model';
import { compareData, hashData } from '../utils/passwordHelper';

// export const authenticateUser = asyncHandler(
//   async (req: Request, res: Response, next: NextFunction) => {
//     console.log('inside auth check middleware');
//     const rawApiKey = String(req.headers['x-api-key']);
//     const authenticate = await User.findOne(req.user);
//     const hashApikey = String(authenticate?.apiKey);
//     const authenticateApikey = compareData(rawApiKey, hashApikey);
//     if (req.user && authenticateApikey) {
//       next();
//     } else res.send(401);
//   }
// );

export const authenticateUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    console.log('inside auth check middleware');
    const apiKey = String(req.headers['x-api-key']);
    const authenticate = await User.findOne(req.user);
    const savedApikey = String(authenticate?.apiKey);
    if (req.user && apiKey === savedApikey) {
      next();
    } else res.send(401);
  }
);

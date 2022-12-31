import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import { User } from '../models/user.model';
import { hashData } from '../utils/passwordHelper';

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

interface RequestWithApiKey extends Request {
  apiKey: any;
}

export const authenticateUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    console.log('inside auth check middleware');
    console.log(req.user);
    // const apiKey = req.headers['x-api-key'];
    // const hashedApiKey = hashData(String(apiKey));
    const authenticateApiKey = await User.findOne(req.user);
    if (req.user && authenticateApiKey) {
      // req.apiKey === 'a';
      next();
    } else res.send(401);
  }
);

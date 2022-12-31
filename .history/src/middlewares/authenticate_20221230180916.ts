import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';

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
    // console.log(req.user);
    if (req.user) next();
    else res.send(401);
  }
);

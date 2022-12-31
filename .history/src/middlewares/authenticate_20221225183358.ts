import { Request, Response, NextFunction } from 'express';

// router.use((req, res, next) => {
//   console.log('inside auth check middlware');
//   console.log(req.user);
//   if (req.user) next();
//   else res.send(401);
// });

export const authenticateUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('inside auth check middleware');
  console.log(req.user);
  if (req.user) next();
  else res.send(401);
};

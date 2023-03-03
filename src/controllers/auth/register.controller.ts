import { NextFunction, Request, Response } from 'express';
import passport from 'passport';
import { UserJwt } from '../../models/user.jwt.model';
import asyncHandler from 'express-async-handler';
import { generateApiKey } from 'generate-api-key';

// export const registerUser = asyncHandler(async (req, res, next) => {
//   console.log(req.body);
//   const registerUser = await UserJwt.register(
//     new UserJwt({
//       username: req.body.username,
//     }),
//     req.body.password
//   );
//   if (registerUser) {
//     passport.authenticate('local')(req, res, () => {
//       res
//         .status(201)
//         .send({ success: true, status: 'Registration Successful!' });
//       next();
//     });
//   } else {
//     next();
//   }
// });

export const registerUser = (req, res, next) => {
  (req, res, next) => {
    // Create User
    User.register(
      new User({ username: req.body.username, email: req.body.username }),
      req.body.password,
      (err, user) => {
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.json({ err: err });
        } else {
          // Use passport to authenticate User
          passport.authenticate('local')(req, res, () => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({ success: true, status: 'Registration Successful!' });
          });
        }
      }
    );
  };
};

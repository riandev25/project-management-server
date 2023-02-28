import { Request, Response, Router } from 'express';
import passport from 'passport';
import { authRegisterController } from '../controllers/auth/auth.controller';
import asyncHandler from 'express-async-handler';
const router = Router();

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(400).send({ message: 'User not found' });
    req.logIn(user, (err) => {
      if (err) return next(err);
      return res.status(200).send({
        message: 'Successfully logged in',
        user: req.user,
      });
    });
  })(req, res, next);
});

// router.post(
//   '/login',
//   passport.authenticate('local'),
//   asyncHandler((req, res) => {
//     console.log('log');
//     console.log(req.cookies);
//     if (req.user && req.cookies) {
//       console.log(`This is ${req.user} for login`);
//       res.status(200).send({
//         message: 'Successfully logged in',
//         user: req.user,
//       });
//     } else {
//       res.status(400).send({ message: 'User not found' });
//     }
//   })
// );

router.post('/logout', (req, res, next) => {
  req.session.destroy((err) => {
    if (err) return next(err);
  });
  res.clearCookie('session');
  res.send(204);
});

router.post('/register', authRegisterController);

export default router;

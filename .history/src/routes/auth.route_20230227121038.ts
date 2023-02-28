import { Request, Response, Router } from 'express';
import passport from 'passport';
import { authRegisterController } from '../controllers/auth/auth.controller';
import asyncHandler from 'express-async-handler';
const router = Router();

router.post(
  '/login',
  passport.authenticate('local'),
  asyncHandler((req, res) => {
    console.log('log');
    console.log(req.cookies);
    if (req.user && req.cookies) {
      console.log(`This is ${req.user} for login`);
      res.status(200).send({
        message: 'Successfully logged in',
        user: req.user,
      });
    } else {
      res.status(400).send({ message: 'User not found' });
    }
  })
);

router.post('/logout', (req, res, next) => {
  req.session.destroy((err) => {
    if (err) return next(err);
  });
  res.clearCookie('session');
  res.send(204);
});

router.post('/register', authRegisterController);

export default router;

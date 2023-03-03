import { Router } from 'express';
import passport from 'passport';

const router = Router();

import { loginUser } from '../controllers/auth/login.controller';
import { UserJwt } from '../models/user.jwt.model';

router.post('/register', (req, res, next) => {
  // Create User
  UserJwt.register(
    new UserJwt({ username: req.body.username }),
    req.body.password,
    (err, user) => {
      if (err) {
        console.log(err);
        res.status(500).send({ err: err });
      } else {
        // Use passport to authenticate User
        passport.authenticate('local')(req, res, () => {
          res
            .status(201)
            .send({ success: true, status: 'Registration Successful!' });
        });
      }
    }
  );
});

router.post(
  '/login',
  (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        console.log(err);
        return next(err);
      }
      if (!user) {
        return res.status(401).json({ success: false, message: info.message });
      }
      req.logIn(user, (err) => {
        if (err) {
          return next(err);
        }
        next();
      });
    })(req, res, next);
  },
  loginUser
);

router.post('/logout', (req, res, next) => {
  req.session.destroy((err) => {
    if (err) return next(err);
  });
  res.clearCookie('session');
  res.send(204);
});

export default router;

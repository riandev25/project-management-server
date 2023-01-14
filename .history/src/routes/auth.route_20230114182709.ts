import { Request, Response, Router } from 'express';
import passport from 'passport';
import { authRegisterController } from '../controllers/auth/auth.controller';
// import { connectToSessions } from '../../database/mongodb';
import { authenticateUser } from '../middlewares/authenticate';
import asyncHandler from 'express-async-handler';
const router = Router();

// router.use(connectToSessions);

router.post(
  '/login',
  passport.authenticate('local'),
  asyncHandler((req, res) => {
    if (req.user) {
      res.status(200).send({
        message: 'Successfully logged in',
        session: req.session,
        user: req.user,
      });
    } else {
      res.status(401).send({ message: 'User not found' });
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

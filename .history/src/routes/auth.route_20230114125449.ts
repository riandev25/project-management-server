import { Router } from 'express';
import passport from 'passport';
import { authRegisterController } from '../controllers/auth/auth.controller';
// import { connectToSessions } from '../../database/mongodb';
import { authenticateUser } from '../middlewares/authenticate';
import asyncHandler from 'express-async-handler';
const router = Router();

// router.use(connectToSessions);

router.post(
  '/login',
  asyncHandler(async (req, res) => {
    await passport.authenticate('local', (err, user, info) => {
      if (err || !user) {
        res
          .status(401)
          .send({ status: 'failed', message: 'Authentication failed' });
      } else {
        res
          .status(200)
          .send({ status: 'success', message: 'Logged in successful' });
      }
    });
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

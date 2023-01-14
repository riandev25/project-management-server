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
    const result = await passport.authenticate('local');
    res.status(200).send({ status: 'success', message: result });
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

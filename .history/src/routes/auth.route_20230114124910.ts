import { Router } from 'express';
import passport from 'passport';
import { authRegisterController } from '../controllers/auth/auth.controller';
// import { connectToSessions } from '../../database/mongodb';
import { authenticateUser } from '../middlewares/authenticate';
const router = Router();

// router.use(connectToSessions);

router.post(
  '/login',
  // (req, res, next) => {
  //   if (req.user) res.redirect('/login');
  //   else next();
  // },
  passport.authenticate('local'),
  (req, res) => {
    res
      .status(200)
      .send({ status: 'success', message: 'Logged in succesfully' });
  },
  (req, res) => {
    res
      .status(401)
      .send({ status: 'failed', message: 'Authentication failed' });
  }
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

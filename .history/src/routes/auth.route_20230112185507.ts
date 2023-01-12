import { Router } from 'express';
import passport from 'passport';
import { authRegisterController } from '../controllers/auth/auth.controller';
// import { connectToSessions } from '../../database/mongodb';
import { authenticateUser } from '../middlewares/authenticate';
const router = Router();

// router.use(connectToSessions);

router.post(
  '/login',
  (req, res, next) => {
    if (req.user) res.redirect('/login');
    else next();
  },
  passport.authenticate('local', {
    failureRedirect: '/login',
  }),
  // async (req, res) => {
  //   res.status(200).send(req.user);
  // }
  (req, res) => {
    console.log(req.user);
    res.redirect('');
  }
);

router.post('/logout', (req, res, next) => {
  // req.logout((err) => {
  //   if (err) {
  //     console.log(err);
  //     return;
  //   }
  //   res.redirect('/login');
  // });
  req.session.destroy((err) => {
    if (err) return next(err);
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      res.redirect('/login');
    });
  });
});

router.post('/register', authRegisterController);

export default router;

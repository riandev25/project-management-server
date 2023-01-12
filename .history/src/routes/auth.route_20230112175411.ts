import { Router } from 'express';
import passport from 'passport';
import { authRegisterController } from '../controllers/auth/auth.controller';
// import { connectToSessions } from '../../database/mongodb';
const router = Router();

// router.use(connectToSessions);

router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/board',
    failureRedirect: '/login',
  })
  // async (req, res) => {
  //   res.status(200).send(req.user);
  // }
);

router.post('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      console.log(err);
      return;
    }
    res.redirect('/login');
  });
});

router.post('/register', authRegisterController);

export default router;

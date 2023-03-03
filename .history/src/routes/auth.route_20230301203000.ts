import { Request, Response, Router } from 'express';
import passport from 'passport';
import { authRegisterController } from '../controllers/auth/auth.controller';
import asyncHandler from 'express-async-handler';
const router = Router();

// new
import { registerUser } from '../controllers/auth/register.controller';
import { loginUser } from '../controllers/auth/login.controller';

router.post('/register', registerUser);
// router.post('/login', passport.authenticate('local'), loginUser);
router.post(
  '/login',
  (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.status(401).json({ success: false, message: info.message });
      }
      console.log(user);
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

// router.post(
//   '/login',
//   passport.authenticate('local'),
//   asyncHandler((req, res) => {
//     console.log('session cookies');
//     console.log(req.session.cookie);
//     if (req.user) {
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

// router.post('/logout', (req, res, next) => {
//   req.session.destroy((err) => {
//     if (err) return next(err);
//   });
//   res.clearCookie('session');
//   res.send(204);
// });

// router.post('/register', authRegisterController);

export default router;

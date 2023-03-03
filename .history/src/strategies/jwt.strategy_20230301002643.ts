import passport from 'passport';
import passportLocal from 'passport-local';
import passportJwt, { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import jwt from 'jsonwebtoken';
import { JwtFromRequestFunction } from 'passport-jwt';
import { UserJwt } from '../models/user.jwt.model';

interface IOptions extends passportJwt.StrategyOptions {
  jwtFromRequest: JwtFromRequestFunction;
}

// Local strategy with Passport-Local-Mongoose plugin User.authenticate() function
passport.use(new passportLocal.Strategy(UserJwt.authenticate()));

// Required for our support for sessions in Passport.
passport.serializeUser(UserJwt.serializeUser());
passport.deserializeUser(UserJwt.deserializeUser());

export function getToken(user: { _id: string }): string {
  // This helps us to create the JSON Web Token
  return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });
}

// Options to specify for my JWT based strategy.
const opts = {} as IOptions;

// Specifies how the jsonwebtoken should be extracted from the incoming request message
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

// Supply the secret key to be using within strategy for the sign-in.
opts.secretOrKey = process.env.JWT_SECRET;

// JWT Strategy
passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    // Search the user with jwt.payload ID field
    const user = UserJwt.findOne({ _id: jwt_payload._id });
    try {
      if (user) return done(null, user);
      else return done(null, false);
    } catch (err) {
      return done(err, false);
    }
  })
);

// Verify an incoming user with jwt strategy we just configured above
export const verifyUser = passport.authenticate('jwt', { session: false });

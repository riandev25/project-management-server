import passport from 'passport';
import { Strategy } from 'passport-local';
import { User } from '../models/user.model';
import { compareData } from '../utils/passwordHelper';

passport.serializeUser((user, done) => {
  console.log('Serializing User...');
  console.log(user);
  done(null, user);
  // done(null, user);
});

passport.deserializeUser(async (id, done) => {
  console.log('Deserializing User');
  console.log(id);
  try {
    const user = await User.findById(id);
    if (!user) throw new Error('User not found');
    console.log(user);
    done(null, user);
  } catch (err) {
    console.log(err);
    done(err, null);
  }
});

passport.use(
  new Strategy(
    {
      usernameField: 'email',
    },
    async (email, password, done) => {
      try {
        if (!email || !password) throw new Error('Missing Credentials');
        const userDB = await User.findOne({ email });
        if (!userDB) throw new Error('User not found');
        const isValid = compareData(password, userDB.password);
        if (isValid) {
          console.log('Authenticated Successfully!');
          done(null, userDB);
        } else {
          console.log('Invalid Authentication');
          done(null, null);
        }
      } catch (err) {
        console.log(err);
        done(err, null);
      }
    }
  )
);

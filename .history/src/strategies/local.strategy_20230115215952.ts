import generateApiKey from 'generate-api-key';
import passport from 'passport';
import { Strategy } from 'passport-local';
import { User } from '../models/user.model';
import { compareData, hashData } from '../utils/passwordHelper';

passport.serializeUser((user, done) => {
  console.log('Serializing User...');
  done(null, user);
});

passport.deserializeUser(async (id, done) => {
  console.log('Deserializing User');
  try {
    const user = await User.findById(id, { email: 1, apiKey: 1 });
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
        if (!email || !password)
          return done(null, false, { message: 'Invalid credentials' });
        const user = await User.findOne({ email });
        if (!user) return done(null, false, { message: 'User not found' });
        const isValid = compareData(password, user.password);
        if (isValid) {
          console.log('Authenticated Successfully!');
          return done(null, user);
        } else {
          console.log('Invalid Authentication');
          done(null, false, { message: 'User not found' });
        }
      } catch (err) {
        console.log(err);
        done(err, null);
      }
    }
  )
);

// passport.use(
//   new Strategy(
//     {
//       usernameField: 'email',
//     },
//     async (email, password, done) => {
//       try {
//         if (!email || !password)
//           return done(null, false, { message: 'Invalid credentials' });
//         const user = await User.findOne({ email });
//         if (!user) return done(null, false, { message: 'User not found' });
//         if (user?.apiKey === undefined) {
//           const apiKey = generateApiKey({ method: 'string', length: 32 });
//           const hashedApiKey = hashData(String(apiKey));
//           await User.updateOne({email}, {$set: {apiKey: hashedApiKey}} )
//         }
//         const isValid = compareData(password, user.password);
//         if (isValid) {
//           console.log('Authenticated Successfully!');
//           return done(null, user);
//         } else {
//           console.log('Invalid Authentication');
//           done(null, false, { message: 'User not found' });
//         }
//       } catch (err) {
//         console.log(err);
//         done(err, null);
//       }
//     }
//   )
// );

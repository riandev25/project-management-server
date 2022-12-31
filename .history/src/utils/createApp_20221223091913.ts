import { Express } from 'express';
import express from 'express';
import cors from 'cors';
import session, { Session, SessionData, SessionOptions } from 'express-session';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import MongoStore from 'connect-mongo';
import routes from '../routes';
import '../strategies/local';

// type User = {
//   id: string;
//   email: string;
// };

// declare module 'express-session' {
//   interface SessionData {
//     user: User;
//   }
// }

export const createApp = (): Express => {
  const app = express();

  // Enable parsing Middleware for Request
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(cookieParser());

  // Enable cors
  app.use(
    cors({
      origin: ['https://localhost:3000'],
      credentials: true,
    })
  );

  app.use(
    session({
      secret: 'ASDASDASD',
      resave: false,
      saveUninitialized: false,
      // cookie: {
      //   maxAge: 60000 * 60 * 24 * 7,
      // },

      store: MongoStore.create({
        mongoUrl: `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@pm.bamwdsp.mongodb.net/?retryWrites=true&w=majority`,
      }),
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.use('/api', routes);
  return app;
};

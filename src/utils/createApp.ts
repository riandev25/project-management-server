import { Express } from 'express';
import express from 'express';
import cors from 'cors';
import compression from 'compression';
import session from 'express-session';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import MongoStore from 'connect-mongo';
import routes from '../routes/routes';
import '../strategies/local.strategy';
import * as dotenv from 'dotenv';
import '../utils/cloudinary';
import { corsHeader } from '../middlewares/corsHeader';

export const createApp = (): Express => {
  dotenv.config();

  const app = express();

  // Enable cors
  // const corsOptions = {
  //   origin: '*',
  //   credentials: true,
  // };
  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );

  // app.use(corsHeader);

  // Compressed to gzip file
  app.use(compression());

  app.use(express.static('dist'));

  // Enable parsing Middleware for Request
  app.use(express.json());
  // app.use(express.urlencoded({ extended: true }));

  app.use(cookieParser());

  app.use(
    session({
      secret: 'session',
      resave: false,
      saveUninitialized: false,
      // cookie: {
      //   httpOnly: true,
      //   secure: true,
      //   maxAge: 1000 * 60 * 60 * 48,
      //   sameSite: 'none',
      // },
      store: MongoStore.create({
        mongoUrl: `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@pm.bamwdsp.mongodb.net/session-data?retryWrites=true&w=majority`,
      }),
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.use('/api', routes);
  return app;
};

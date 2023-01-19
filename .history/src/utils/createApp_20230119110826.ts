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

  if (process.env.NODE_ENV === 'production') {
    app.use(
      session({
        secret: 'session',
        resave: false,
        saveUninitialized: false,
        cookie: {
          // sameSite: 'none',
          domain: 'localhost',
          httpOnly: true,
          secure: false,
          maxAge: 30 * 24 * 60 * 60 * 1000,
        },
        store: MongoStore.create({
          mongoUrl: process.env.MONGO_SESSION_URI,
        }),
      })
    );
  } else {
    app.use(
      session({
        secret: 'session',
        resave: false,
        saveUninitialized: false,
        cookie: {
          // domain: 'localhost',
          secure: false,
          maxAge: 30 * 24 * 60 * 60 * 1000,
        },
        store: MongoStore.create({
          mongoUrl: process.env.MONGO_SESSION_URI,
        }),
      })
    );
  }

  app.use(passport.initialize());
  app.use(passport.session());

  app.use('/api', routes);
  return app;
};

import { Express } from 'express';

import express from 'express';
import cors from 'cors';
import compression from 'compression';
import session from 'express-session';
import passport from 'passport';
import MongoStore from 'connect-mongo';
import routes from '../routes/routes';
import '../strategies/local.strategy';
import * as dotenv from 'dotenv';
import '../utils/cloudinary';
import cookieParser from 'cookie-parser';

export const createApp = (): Express => {
  dotenv.config();

  const app = express();

  app.use(cookieParser());

  // app.use(
  //   cors({
  //     origin: ['http://localhost:3000', 'https://taskaccio.vercel.app'],
  //     allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
  //     credentials: true,
  //     optionsSuccessStatus: 200,
  //   })
  // );

  // Compressed to gzip file
  app.use(compression());

  app.use(express.static('dist'));

  // Enable parsing Middleware for Request
  app.use(express.json());

  app.use(function (req, res, next) {
    const allowedOrigins = [
      'http://localhost:3000',
      'http://taskaccio.vercel.app',
    ];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(String(origin))) {
      res.header('Access-Control-Allow-Origin', origin);
      res.header('Access-Control-Allow-Credentials', 'true');
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
      );
    }
    next();
  });

  // app.set('trust proxy', 1);
  app.use(
    session({
      // proxy: process.env.NODE_ENV === 'production' ? true : false,
      secret: 'session',
      resave: false,
      saveUninitialized: false,
      cookie: {
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production' ? true : false,
        maxAge: 30 * 24 * 60 * 60 * 1000,
      },
      store: MongoStore.create({
        mongoUrl: process.env.MONGO_SESSION_URI,
      }),
    })
  );

  app.get('/api/test', (req: any, res: express.Response) => {
    if (!req.session.views) {
      req.session.views = 0;
    }

    req.session.views += 1;
    res.send(`Number of views: ${req.session.views}`);
  });

  app.use(passport.initialize());
  app.use(passport.session());

  app.use('/api', routes);
  return app;
};

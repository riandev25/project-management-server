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

  // Enable cors
  // const corsOptions = {
  //   origin: '*',
  //   credentials: true,
  // };
  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
      optionsSuccessStatus: 200,
    })
  );

  // app.use(corsHeader);

  app.use(cookieParser());

  // Compressed to gzip file
  app.use(compression());

  app.use(express.static('dist'));

  // Enable parsing Middleware for Request
  app.use(express.json());
  // app.use(express.urlencoded({ extended: true }));

  // const proxyOptions = {
  //   target: 'http://www.example.org',
  //   changeOrigin: true
  // };

  // const apiProxy = createProxyMiddleware(proxyOptions) as any

  app.set('trust proxy', 1);
  app.use(
    session({
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

  app.use(passport.initialize());
  app.use(passport.session());

  app.use('/api', routes);
  return app;
};

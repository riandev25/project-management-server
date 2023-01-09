import { Express } from 'express';
import express from 'express';
import compression from 'compression';
import cors from 'cors';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import MongoStore from 'connect-mongo';
import routes from '../routes/routes';
import '../strategies/local.strategy';
import * as dotenv from 'dotenv';
import '../utils/cloudinary';

dotenv.config();

export const createApp = (): Express => {
  const app = express();

  app.use(express.static('dist'));

  // Gzip compressing
  app.use(compression());

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
function session(arg0: {
  secret: string;
  resave: boolean;
  saveUninitialized: boolean;
  // cookie: {
  //   maxAge: 60000 * 60 * 24 * 7,
  // },
  store: MongoStore;
}): any {
  throw new Error('Function not implemented.');
}

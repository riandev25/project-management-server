import { Express, Request, Response } from 'express';

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

import next from 'next';
const nextServer = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = nextServer.getRequestHandler();

export const createApp = async () => {
  try {
    dotenv.config();

    await nextServer.prepare();

    const app = express();

    app.all('*', (req: Request, res: Response) => {
      return handle(req, res);
    });

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
            sameSite: 'none',
            secure: true,
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

    //   app.use((req, res, next) => {
    //   (req as any).nextApp.render(req, res, req.path, { ...req.query, ...req.params, ...req.session });
    //   next();
    // });

    app.use('/api', routes);
    return app;
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

// import { Express } from 'express';

// import express from 'express';
// import cors from 'cors';
// import compression from 'compression';
// import session from 'express-session';
// import passport from 'passport';
// import cookieParser from 'cookie-parser';
// import MongoStore from 'connect-mongo';
// import routes from '../routes/routes';
// import '../strategies/local.strategy';
// import * as dotenv from 'dotenv';
// import '../utils/cloudinary';

// import next from 'next';
// const nextServer = next({process.env.NODE_ENV})

// export const createApp = (): Express => {
//   dotenv.config();

//   const app = express();

//   // Enable cors
//   // const corsOptions = {
//   //   origin: '*',
//   //   credentials: true,
//   // };
//   app.use(
//     cors({
//       origin: 'http://localhost:3000',
//       credentials: true,
//     })
//   );

//   // app.use(corsHeader);

//   // Compressed to gzip file
//   app.use(compression());

//   app.use(express.static('dist'));

//   // Enable parsing Middleware for Request
//   app.use(express.json());
//   // app.use(express.urlencoded({ extended: true }));

//   app.use(cookieParser());

//   if (process.env.NODE_ENV === 'production') {
//     app.use(
//       session({
//         secret: 'session',
//         resave: false,
//         saveUninitialized: false,
//         cookie: {
//           sameSite: 'none',
//           secure: true,
//           maxAge: 30 * 24 * 60 * 60 * 1000,
//         },
//         store: MongoStore.create({
//           mongoUrl: process.env.MONGO_SESSION_URI,
//         }),
//       })
//     );
//   } else {
//     app.use(
//       session({
//         secret: 'session',
//         resave: false,
//         saveUninitialized: false,
//         cookie: {
//           maxAge: 30 * 24 * 60 * 60 * 1000,
//         },
//         store: MongoStore.create({
//           mongoUrl: process.env.MONGO_SESSION_URI,
//         }),
//       })
//     );
//   }

//   app.use(passport.initialize());
//   app.use(passport.session());

//   app.use((req, res, next) => {
//   (req as any).nextApp.render(req, res, req.path, { ...req.query, ...req.params, ...req.session });
//   next();
// });

//   app.use('/api', routes);
//   return app;
// };

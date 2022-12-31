import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';

export const connectToSessions = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { DB_USERNAME, DB_PASSWORD } = process.env;
  const URI = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@pm.bamwdsp.mongodb.net/?retryWrites=true&w=majority
  `;
  try {
    mongoose.connect(URI);
    console.log('Connected to MongoDB');
    next();
  } catch (error) {
    console.error(error);
  }
};

export const connectToBoards = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { DB_USERNAME, DB_PASSWORD } = process.env;
  const URI = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@pm.bamwdsp.mongodb.net/?retryWrites=true&w=majority`;
  try {
    mongoose.createConnection(URI);
    console.log('Connected to MongoDB');
    next();
  } catch (error) {
    console.error(error);
  }
};

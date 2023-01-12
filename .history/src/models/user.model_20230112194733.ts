import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import asyncHandler from 'express-async-handler';
import { userSchema } from './schemas/user.schema';

dotenv.config();

// export const User = asyncHandler(async() => {
//   const UserConn = await mongoose.createConnection(process.env.MONGO_SESSION_URI!);
//   return UserConn.model('User', userSchema, 'users');
// })

const UserConn = mongoose.createConnection(process.env.MONGO_SESSION_URI!);

export const User = UserConn.model('User', userSchema, 'users');

import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import { userSchema } from './schemas/user.schema';

dotenv.config();

const UserConn = mongoose.createConnection(process.env.MONGO_SESSION_URI!);

export const User = UserConn.model('User', userSchema, 'sessions');

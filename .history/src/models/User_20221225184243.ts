import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const userSchema = new mongoose.Schema({
  email: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  password: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  createdAt: {
    type: mongoose.SchemaTypes.Date,
    required: true,
    default: new Date(),
  },
});

const UserConn = mongoose.createConnection(process.env.MONGO_SESSION_URI!);

export const User = UserConn.model('User', userSchema, 'users');

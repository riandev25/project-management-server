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

console.log(typeof process.env.MONGO_SESSION_URI!);
// const { DB_USERNAME, DB_PASSWORD } = process.env;
const UserConn = mongoose.createConnection(process.env.MONGO_SESSION_URI!);

export const User = UserConn.model('User', userSchema, 'users-name');

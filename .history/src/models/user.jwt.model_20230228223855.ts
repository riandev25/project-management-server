import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import { Schema } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

dotenv.config();

const userSchema = new Schema({
  roles: [
    {
      type: String,
      required: false,
    },
  ],
  attributes: [
    {
      type: Object,
      required: false,
    },
  ],
});

userSchema.plugin(passportLocalMongoose);

const UserConn = mongoose.createConnection(process.env.MONGO_BOARD_URI!);

export const UserJwt = UserConn.model('User', userSchema, 'users');

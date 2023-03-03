import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import { Schema } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

dotenv.config();

const userJwtSchema = new Schema({
  email: { type: String, required: true, unique: true },
});

userJwtSchema.plugin(passportLocalMongoose);

export const UserJwt = mongoose.model('User', userJwtSchema, 'users');

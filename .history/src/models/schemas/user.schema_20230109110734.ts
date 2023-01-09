import mongoose from 'mongoose';
import { emailValidator } from '../../utils/emailValidator';
// import * as validator from 'mongoose-validator'

// const emailRegex = [
//   validator({
//     validator: 'matches',
//     arguments: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
//     message: 'Invalid Email'
//   })
// ];

// const emailValidator = [
//   validator({
//     validator: 'isEmail',
//     message: 'Invalid Email'
//   })
// ];

// const emailValidator = (value: string) => {
//   return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
// }

export const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: emailValidator,
      message: 'Please enter a valid email address',
    },
  },
  password: {
    type: String,
    required: true,
  },
  apiKey: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: new Date(),
  },
});

import mongoose from 'mongoose';
import { emailValidator } from '../../utils/emailValidator';
import { passwordValidator } from '../../utils/passwordValidator';

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
    validate: {
      validator: passwordValidator,
      message:
        'Password must be at least 8 characters long and contain at least one special character, one uppercase letter, one lowercase letter, and one number',
    },
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

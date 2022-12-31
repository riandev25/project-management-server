import mongoose from 'mongoose';

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

const { DB_USERNAME, DB_PASSWORD } = process.env;
const UserConn = mongoose.createConnection(
  `mongodb+srv://${String(DB_USERNAME)}:${String(
    DB_PASSWORD
  )}@pm.bamwdsp.mongodb.net/sessions?retryWrites=true&w=majority`
);

export const User = UserConn.model('User', userSchema, 'users-name');

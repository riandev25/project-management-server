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

console.log(process.env.PORT);
// const { DB_USERNAME, DB_PASSWORD } = process.env;
const UserConn = mongoose.createConnection(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@pm.bamwdsp.mongodb.net/sessions?retryWrites=true&w=majority`
);

export const User = UserConn.model('User', userSchema, 'users-name');

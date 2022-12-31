import { hashPassword } from '../utils/passwordHelper';
import { User } from '../models/user.model';
import { Request, Response } from 'express';

export const authRegisterController = async (req: Request, res: Response) => {
  const { email } = req.body;
  const userDB = await User.findOne({ email });
  if (userDB) {
    res.status(400).send({ msg: 'User already exists!' });
  } else {
    const password = hashPassword(req.body.password);
    console.log(password);
    const newUser = await User.create({ password, email });
    res.send(201);
  }
};

import { hashData } from '../../utils/passwordHelper';
import { User } from '../../models/user.model';
import { Request, Response } from 'express';
import { generateApiKey } from 'generate-api-key';
import asyncHandler from 'express-async-handler';
import { recursionGenApiKey } from '../../utils/recursionGenApiKey';

// export const authRegisterController = asyncHandler(
//   async (req: Request, res: Response) => {
//     const { email } = req.body;
//     // const apiKey: any = req.headers['api-key'];
//     const userDB = await User.findOne({ email });
//     if (userDB) {
//       res.status(400).send({ msg: 'User already exists!' });
//     } else {
//       const password = hashData(req.body.password);
//       const apiKey = generateApiKey({ method: 'string', length: 32 });
//       const hashedApiKey = hashData(String(apiKey));
//       const newUser = await User.create({
//         password,
//         email,
//         apiKey: hashedApiKey,
//       });
//       res.status(201).send({ message: 'Registration successful', apiKey });
//     }
//   }
// );

export const authRegisterController = asyncHandler(
  async (req: Request, res: Response) => {
    const { email } = req.body;
    // const apiKey: any = req.headers['api-key'];
    const userDB = await User.findOne({ email });
    if (userDB) {
      res.status(400).send({ msg: 'User already exists!' });
    } else {
      const password = hashData(req.body.password);
      // const apiKey = recursionGenApiKey();
      const apiKey = generateApiKey({ method: 'string', length: 32 });
      const newUser = await User.create({
        email,
        password,
        apiKey,
      });
      res.status(201).send({ message: 'Registration successful' });
    }
  }
);

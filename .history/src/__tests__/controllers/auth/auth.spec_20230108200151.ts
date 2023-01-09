// import { authRegisterController } from '../../../controllers/auth/auth.controller';
// import { User } from '../../../models/user.model';
// import { hashData } from '../../../utils/passwordHelper';
// import { Request, Response } from 'express';

// interface Ireq {
//   body: {
//     email: string,
//     password: string
//   }
// }

// jest.mock('../../../utils/passwordHelper', () => ({
//   hashData: jest.fn(() => 'hash password'),
// }));

// jest.mock('../../../models/user.model');

// const req: Request = {
//   body: {
//     email: 'c',
//     password: 'c',
//   },
// };

// const res: Response = {
//   status: jest.fn((x) => x),
//   send: jest.fn((x) => x),
// };

// it('should send a status code of 400 when user exists', async () => {
//   (User.findOne as jest.Mock).mockImplementationOnce(() => ({
//     id: 1,
//     email: 'email',
//     password: 'password',
//   }));
//   await authRegisterController(req, res);
//   expect(res.status).toHaveBeenCalledWith(400);
//   expect(res.send).toHaveBeenCalledTimes(1);
// });

// it('should send a status code of 201 when new user is created', async () => {
//   (User.findOne as jest.Mock).mockResolvedValueOnce(undefined);
//   (User.create as jest.Mock).mockResolvedValueOnce({
//     id: 1,
//     email: 'email',
//     password: 'password',
//   });
//   await authRegisterController(req, res);
//   expect(hashData).toHaveBeenCalledWith('fake_password');
//   expect(User.create).toHaveBeenCalledWith({
//     email: 'fake_email',
//     password: 'hash password',
//   });
//   expect(res.send).toHaveBeenCalledWith(201);
// });

import { authRegisterController } from '../../../controllers/auth/auth.controller';
import { User } from '../../../models/user.model';
import { hashData } from '../../../utils/passwordHelper';

jest.mock('../../../utils/passwordHelper', () => ({
  hashData: jest.fn(() => 'hash password'),
}));

jest.mock('../../../models/user.model');

const req = {
  body: {
    email: 'c',
    password: 'c',
  },
};

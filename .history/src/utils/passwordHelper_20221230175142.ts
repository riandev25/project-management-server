import bcrypt from 'bcryptjs';

export const hashData = (password: string) => {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(password, salt);
};

export const compareData = (raw: string, hash: string) => {
  return bcrypt.compareSync(raw, hash);
};

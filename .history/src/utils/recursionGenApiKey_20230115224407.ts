import generateApiKey from 'generate-api-key';
import { User } from '../models/user.model';

export const recursionGenApiKey: any = async () => {
  const apiKey = generateApiKey({ method: 'string', length: 32 });
  const user = await User.findOne({ apiKey });
  if (!user) {
    return apiKey;
  }
  return recursionGenApiKey();
};

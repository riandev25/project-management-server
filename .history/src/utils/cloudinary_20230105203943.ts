import * as cloudinaryConfig from 'cloudinary';

export const cloudinary = cloudinaryConfig.v2.config({
  api_key: 'YOUR_API_KEY',
  api_secret: 'YOUR_API_SECRET',
  cloud_name: 'YOUR_CLOUD_NAME',
});

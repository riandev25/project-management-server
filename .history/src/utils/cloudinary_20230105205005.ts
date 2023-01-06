import * as cloudinaryConfig from 'cloudinary';

export const cloudinary = cloudinaryConfig.v2.config({
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_KEY,
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
});

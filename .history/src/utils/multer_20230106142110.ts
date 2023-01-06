import multer from 'multer';
import path = require('path');

// Multer config
export const upload = multer({
  storage: multer.diskStorage({
    filename: (req, file, cb) => {
      // you can use the following method to generate a unique name for the image
      const uniqueFilename = `${Date.now()}-${file.originalname}`;
      cb(null, uniqueFilename);
    },
  }),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') {
      cb(null, false);
      return;
    }
    cb(null, true);
  },
});

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
    if (
      ext !== '.jpg' &&
      ext !== '.jpeg' &&
      ext !== '.png' &&
      ext !== '.docx' &&
      ext !== '.xls'
    ) {
      cb(null, false);
      return;
    }
    cb(null, true);
  },
  // fileFilter: (req, file, cb) => {
  //   if (
  //     file.mimetype === 'image/png' ||
  //     file.mimetype === 'image/jpg' ||
  //     file.mimetype === 'image/jpeg' ||
  //     file.mimetype === 'image/gif' ||
  //     file.mimetype ===
  //       'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  //   ) {
  //     cb(null, true);
  //   } else {
  //     cb(null, false);
  //     return cb(new Error('Invalid file type.'));
  //   }
  // },
});

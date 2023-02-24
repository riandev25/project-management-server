"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
// Multer config
exports.upload = (0, multer_1.default)({
    storage: multer_1.default.diskStorage({
        filename: (req, file, cb) => {
            // you can use the following method to generate a unique name for the image
            const uniqueFilename = `${Date.now()}-${file.originalname}`;
            cb(null, uniqueFilename);
        },
    }),
    fileFilter: (req, file, cb) => {
        let ext = path_1.default.extname(file.originalname);
        if (ext !== '.jpg' &&
            ext !== '.jpeg' &&
            ext !== '.png' &&
            ext !== '.svg' &&
            ext !== '.gif') {
            cb(null, false);
            return;
        }
        cb(null, true);
    },
    limits: {
        fileSize: 1024 * 1024 * 5, // 5 mb file size limit
    },
});

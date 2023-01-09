"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAttachment = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const cloudinary_1 = __importDefault(require("cloudinary"));
const path_1 = require("path");
const attachment_model_1 = require("../../models/attachment.model");
exports.addAttachment = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.file) {
        const file = req.file.path;
        const options = { folder: 'attachments' };
        const result = yield cloudinary_1.default.v2.uploader.upload(file, options);
        const { idCard } = req.body;
        const baseFilename = (0, path_1.parse)(req.file.originalname).name;
        // Check if file exist
        const query = { name: baseFilename, idCard };
        const attachmentExist = yield attachment_model_1.Attachment.find(query);
        console.log(baseFilename);
        if (attachmentExist.length == 0) {
            const attachment = new attachment_model_1.Attachment({
                name: baseFilename,
                idCard: idCard,
                file_url: result.secure_url,
                cloudinary_id: result.public_id,
            });
            yield attachment.save();
            res.status(201).send({ attachment });
            next();
        }
        else {
            res.status(400).send({
                message: 'Filename already exist. Please provide another filename.',
            });
            // next(
            //   new Error('Filename already exist. Please provide another filename.')
            // );
        }
    }
}));

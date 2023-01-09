"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attachment = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const attachment_schema_1 = require("./schemas/attachment.schema");
const attachmentConn = mongoose_1.default.createConnection(process.env.MONGO_BOARD_URI);
exports.Attachment = attachmentConn.model('Attachment', attachment_schema_1.attachmentSchema, 'attachments');

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachmentSchema = void 0;
const mongoose_1 = require("mongoose");
exports.attachmentSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    idCard: { type: String, required: true },
    type: { type: String, required: true },
    file_url: { type: String, required: true },
    cloudinary_id: { type: String, required: true },
    uploaded_on: {
        type: String,
        required: true,
    },
    uploaded_at: {
        type: String,
        required: true,
    },
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    email: {
        type: mongoose_1.default.SchemaTypes.String,
        required: true,
    },
    password: {
        type: mongoose_1.default.SchemaTypes.String,
        required: true,
    },
    createdAt: {
        type: mongoose_1.default.SchemaTypes.Date,
        required: true,
        default: new Date(),
    },
});
exports.User = mongoose_1.default.model('User', userSchema, 'users-name');

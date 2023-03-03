"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const emailValidator_1 = require("../../utils/emailValidator");
const passwordValidator_1 = require("../../utils/passwordValidator");
exports.userSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        validate: {
            validator: emailValidator_1.emailValidator,
            message: 'Please enter a valid email address',
        },
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: passwordValidator_1.passwordValidator,
            message: 'Password must be at least 8 characters long and contain at least one special character, one uppercase letter, one lowercase letter, and one number',
        },
    },
    apiKey: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: new Date(),
    },
});

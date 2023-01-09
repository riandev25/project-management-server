"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareData = exports.hashData = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const hashData = (password) => {
    const salt = bcryptjs_1.default.genSaltSync();
    return bcryptjs_1.default.hashSync(password, salt);
};
exports.hashData = hashData;
const compareData = (raw, hash) => {
    return bcryptjs_1.default.compareSync(raw, hash);
};
exports.compareData = compareData;

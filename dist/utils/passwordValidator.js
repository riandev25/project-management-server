"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordValidator = void 0;
const passwordValidator = (value) => {
    return /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/.test(value);
};
exports.passwordValidator = passwordValidator;

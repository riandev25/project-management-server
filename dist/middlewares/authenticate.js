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
exports.authenticateUser = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const user_model_1 = require("../models/user.model");
const passwordHelper_1 = require("../utils/passwordHelper");
exports.authenticateUser = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('inside auth check middleware');
    const rawApiKey = String(req.headers['x-api-key']);
    const authenticate = yield user_model_1.User.findOne(req.user);
    const hashApikey = String(authenticate === null || authenticate === void 0 ? void 0 : authenticate.apiKey);
    const authenticateApikey = (0, passwordHelper_1.compareData)(rawApiKey, hashApikey);
    if (req.user && authenticateApikey) {
        next();
    }
    else
        res.send(401);
}));
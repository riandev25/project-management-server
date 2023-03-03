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
exports.loginUser = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const jwt_strategy_1 = require("../../strategies/jwt.strategy");
exports.loginUser = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.user) {
        const user = req.user;
        const _id = user._id;
        console.log(_id);
        const token = (0, jwt_strategy_1.getToken)({ _id });
        res.status(201).send({
            success: true,
            token: token,
            status: 'You are successfully logged in!',
            user: {
                _id: user._id,
                username: user.username,
            },
        });
        next();
    }
}));

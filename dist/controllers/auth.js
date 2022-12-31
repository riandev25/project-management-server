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
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRegisterController = void 0;
const passwordHelper_1 = require("../utils/passwordHelper");
const User_1 = require("../models/User");
const authRegisterController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    const userDB = yield User_1.User.findOne({ email });
    if (userDB) {
        res.status(400).send({ msg: 'User already exists!' });
    }
    else {
        const password = (0, passwordHelper_1.hashPassword)(req.body.password);
        console.log(password);
        const newUser = yield User_1.User.create({ password, email });
        res.send(201);
    }
});
exports.authRegisterController = authRegisterController;

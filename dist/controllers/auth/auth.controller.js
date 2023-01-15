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
exports.authRegisterController = void 0;
const passwordHelper_1 = require("../../utils/passwordHelper");
const user_model_1 = require("../../models/user.model");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const recursionGenApiKey_1 = require("../../utils/recursionGenApiKey");
// export const authRegisterController = asyncHandler(
//   async (req: Request, res: Response) => {
//     const { email } = req.body;
//     // const apiKey: any = req.headers['api-key'];
//     const userDB = await User.findOne({ email });
//     if (userDB) {
//       res.status(400).send({ msg: 'User already exists!' });
//     } else {
//       const password = hashData(req.body.password);
//       const apiKey = generateApiKey({ method: 'string', length: 32 });
//       const hashedApiKey = hashData(String(apiKey));
//       const newUser = await User.create({
//         password,
//         email,
//         apiKey: hashedApiKey,
//       });
//       res.status(201).send({ message: 'Registration successful', apiKey });
//     }
//   }
// );
exports.authRegisterController = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    // const apiKey: any = req.headers['api-key'];
    const userDB = yield user_model_1.User.findOne({ email });
    if (userDB) {
        res.status(400).send({ msg: 'User already exists!' });
    }
    else {
        const password = (0, passwordHelper_1.hashData)(req.body.password);
        const apiKey = (0, recursionGenApiKey_1.recursionGenApiKey)();
        const newUser = yield user_model_1.User.create({
            email,
            password,
            apiKey,
        });
        res.status(201).send({ message: 'Registration successful' });
    }
}));

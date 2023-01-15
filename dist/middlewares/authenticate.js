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
// export const authenticateUser = asyncHandler(
//   async (req: Request, res: Response, next: NextFunction) => {
//     console.log('inside auth check middleware');
//     const rawApiKey = String(req.headers['x-api-key']);
//     const authenticate = await User.findOne(req.user);
//     const hashApikey = String(authenticate?.apiKey);
//     const authenticateApikey = compareData(rawApiKey, hashApikey);
//     if (req.user && authenticateApikey) {
//       next();
//     } else res.send(401);
//   }
// );
exports.authenticateUser = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('inside auth check middleware');
    const apiKey = String(req.headers['x-api-key']);
    const authenticate = yield user_model_1.User.findOne(req.user);
    const savedApikey = String(authenticate === null || authenticate === void 0 ? void 0 : authenticate.apiKey);
    if (req.user && apiKey === savedApikey) {
        next();
    }
    else
        res.send(401);
}));

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
exports.recursionGenApiKey = void 0;
const generate_api_key_1 = __importDefault(require("generate-api-key"));
const user_model_1 = require("../models/user.model");
const recursionGenApiKey = () => __awaiter(void 0, void 0, void 0, function* () {
    const apiKey = (0, generate_api_key_1.default)({ method: 'string', length: 32 });
    const user = yield user_model_1.User.findOne({ apiKey });
    if (!user) {
        return apiKey;
    }
    return (0, exports.recursionGenApiKey)();
});
exports.recursionGenApiKey = recursionGenApiKey;

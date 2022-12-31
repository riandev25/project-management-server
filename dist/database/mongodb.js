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
exports.connectToBoards = exports.connectToSessions = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectToSessions = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { DB_USERNAME, DB_PASSWORD } = process.env;
    const URI = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@pm.bamwdsp.mongodb.net/?retryWrites=true&w=majority
  `;
    try {
        mongoose_1.default.connect(URI);
        console.log('Connected to MongoDB');
        next();
    }
    catch (error) {
        console.error(error);
    }
});
exports.connectToSessions = connectToSessions;
const connectToBoards = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { DB_USERNAME, DB_PASSWORD } = process.env;
    const URI = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@pm.bamwdsp.mongodb.net/?retryWrites=true&w=majority`;
    try {
        mongoose_1.default.createConnection(URI);
        console.log('Connected to MongoDB');
        next();
    }
    catch (error) {
        console.error(error);
    }
});
exports.connectToBoards = connectToBoards;

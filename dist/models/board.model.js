"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// import * as dotenv from 'dotenv';
const board_schema_1 = require("./schemas/board.schema");
const BoardConn = mongoose_1.default.createConnection(process.env.MONGO_BOARD_URI);
exports.Board = BoardConn.model('Board', board_schema_1.boardSchema, 'board');

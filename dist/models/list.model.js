"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const list_schema_1 = require("./schemas/list.schema");
const listConn = mongoose_1.default.createConnection(process.env.MONGO_BOARD_URI);
exports.List = listConn.model('List', list_schema_1.listSchema, 'lists');

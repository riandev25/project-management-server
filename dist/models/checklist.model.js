"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckItem = exports.Checklist = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const checklist_schema_1 = require("./schemas/checklist.schema");
const checklistConn = mongoose_1.default.createConnection(process.env.MONGO_BOARD_URI);
const checkItemConn = mongoose_1.default.createConnection(process.env.MONGO_BOARD_URI);
exports.Checklist = checklistConn.model('Checklist', checklist_schema_1.checklistSchema, 'checklists');
exports.CheckItem = checkItemConn.model('CheckItem', checklist_schema_1.checkItemSchema, 'check-item');

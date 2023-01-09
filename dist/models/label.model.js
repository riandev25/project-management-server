"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const label_schema_1 = require("./schemas/label.schema");
const labelConn = mongoose_1.default.createConnection(process.env.MONGO_BOARD_URI);
exports.Label = labelConn.model('Label', label_schema_1.labelSchema, 'labels');

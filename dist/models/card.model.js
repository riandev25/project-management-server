"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const card_schema_1 = require("./schemas/card.schema");
const cardConn = mongoose_1.default.createConnection(process.env.MONGO_BOARD_URI);
exports.Card = cardConn.model('Card', card_schema_1.cardSchema, 'cards');

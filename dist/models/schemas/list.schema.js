"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listSchema = exports.listCardSchema = void 0;
const mongoose_1 = require("mongoose");
exports.listCardSchema = new mongoose_1.Schema({
    cardName: { type: String, required: true },
});
exports.listSchema = new mongoose_1.Schema({
    listName: { type: String, required: true },
    idBoard: { type: String, required: true },
    cards: { type: [exports.listCardSchema] },
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardSchema = void 0;
const mongoose_1 = require("mongoose");
exports.cardSchema = new mongoose_1.Schema({
    cardName: { type: String, required: true },
    idBoard: { type: String, required: true },
});

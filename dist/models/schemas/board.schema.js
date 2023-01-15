"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardSchema = void 0;
const mongoose_1 = require("mongoose");
exports.boardSchema = new mongoose_1.Schema({
    boardName: { type: String, required: true },
    apiKey: { type: (Array), required: true },
});

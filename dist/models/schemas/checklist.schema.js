"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checklistSchema = exports.checkItemSchema = void 0;
const mongoose_1 = require("mongoose");
exports.checkItemSchema = new mongoose_1.Schema({
    // _id: { type: ObjectId, required: true },
    name: { type: String, required: true },
    isChecked: { type: Boolean },
    pos: { type: Number, required: true },
    idChecklist: { type: String },
});
exports.checklistSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    idCard: { type: String, required: true },
});

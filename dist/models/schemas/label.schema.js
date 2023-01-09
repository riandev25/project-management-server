"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.labelSchema = void 0;
const mongoose_1 = require("mongoose");
exports.labelSchema = new mongoose_1.Schema({
    // id: { type: String, required: true },
    name: { type: String, required: true },
    bgColorStrip: { type: String, required: true },
    bgColor: { type: String, required: true },
    bgColorHover: { type: String, required: true },
    iconColor: { type: String, required: true },
    isChecked: { type: Boolean, required: true },
    idCard: { type: String, required: true }
    // isOpen: { type: Boolean, required: true },
});

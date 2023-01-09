"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLabel = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const label_model_1 = require("../../models/label.model");
exports.getLabel = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, iconColor, checked, idCard } = req.query;
    if (!idCard) {
        // Default query to database
        const defaultQuery = { idCard };
        // Optional query to database
        const optionalQuery = {};
        if (name)
            optionalQuery.name = name;
        if (iconColor)
            optionalQuery.iconColor = iconColor;
        if (checked)
            optionalQuery.checked = checked;
        const label = yield label_model_1.Label.find(Object.assign(Object.assign({}, defaultQuery), optionalQuery));
        res.status(200).send(label);
        next();
    }
    else {
        res.send(404);
    }
}));

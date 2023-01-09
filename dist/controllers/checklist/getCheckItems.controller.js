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
exports.getCheckItems = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const checklist_model_1 = require("../../models/checklist.model");
exports.getCheckItems = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, pos, checked } = req.query;
    const checkQueryParam = () => {
        if (checked === 'true')
            return true;
        else
            return false;
    };
    const checkedParam = checkQueryParam();
    const queryData = () => {
        const query = { idChecklist: id };
        const optionalQuery = {};
        if (name)
            optionalQuery.name = encodeURIComponent(String(name));
        if (checked)
            optionalQuery.isChecked = checkedParam;
        if (pos)
            optionalQuery.pos = Number(pos);
        return { query, optionalQuery };
    };
    const allQuery = queryData();
    const checkItem = yield checklist_model_1.CheckItem.find(allQuery);
    res.status(200).send(checkItem);
    next();
}));

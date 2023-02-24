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
exports.getList = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const list_model_1 = require("../../models/list.model");
exports.getList = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { listName, idBoard } = req.query;
    console.log(idBoard);
    if (idBoard) {
        // Default query to database
        const defaultQuery = { idBoard };
        // Optional query to database
        const optionalQuery = {};
        if (listName)
            optionalQuery.name = listName;
        const cardExist = yield list_model_1.List.find(Object.assign(Object.assign({}, defaultQuery), optionalQuery));
        res.status(200).send(cardExist);
        next();
    }
    else {
        res.send(404);
    }
}));

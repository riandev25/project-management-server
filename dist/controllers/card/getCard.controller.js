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
exports.getCard = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const card_model_1 = require("../../models/card.model");
exports.getCard = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { cardName, idBoard } = req.query;
    if (!idBoard) {
        // Default query to database
        const defaultQuery = { idBoard };
        // Optional query to database
        const optionalQuery = {};
        if (cardName)
            optionalQuery.name = cardName;
        const cardExist = yield card_model_1.Card.find(Object.assign(Object.assign({}, defaultQuery), optionalQuery));
        res.status(200).send(cardExist);
        next();
    }
    else {
        res.send(404);
    }
}));

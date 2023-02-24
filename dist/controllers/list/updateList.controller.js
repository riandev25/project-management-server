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
exports.updateList = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const list_model_1 = require("../../models/list.model");
exports.updateList = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { addCard } = req.query;
    const query = { _id: id };
    // const update = { $push: {cards: req.body }};
    const update = addCard === 'true'
        ? { $push: { cards: { cardName: req.body.cardName } } }
        : req.body;
    const card = yield list_model_1.List.findByIdAndUpdate(id, update);
    res.status(200).send(card);
    next();
}));

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
exports.updateCard = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const list_model_1 = require("../../models/list.model");
const attachment_model_1 = require("../../models/attachment.model");
const checklist_model_1 = require("../../models/checklist.model");
const label_model_1 = require("../../models/label.model");
exports.updateCard = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, idCard } = req.params;
    const { type } = req.query;
    console.log(req.body.cardName);
    const query = { _id: id, 'cards._id': idCard };
    const cardQuery = { idCard };
    const update = type === 'delete'
        ? { $pull: { cards: { _id: idCard } } }
        : { $set: { 'cards.$.cardName': req.body.cardName } };
    yield list_model_1.List.findOneAndUpdate(query, update);
    if (type === 'delete') {
        yield attachment_model_1.Attachment.deleteMany(cardQuery);
        yield checklist_model_1.Checklist.deleteMany(cardQuery);
        yield checklist_model_1.CheckItem.deleteMany(cardQuery);
        yield label_model_1.Label.deleteMany(cardQuery);
    }
    res.status(200).send({ message: 'Card deleted successfully' });
    next();
}));

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
exports.deleteSingleList = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const attachment_model_1 = require("../../models/attachment.model");
const checklist_model_1 = require("../../models/checklist.model");
const label_model_1 = require("../../models/label.model");
const list_model_1 = require("../../models/list.model");
exports.deleteSingleList = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const list = yield list_model_1.List.findById(id);
    // Retrieve all card id in a list
    const cardIds = list === null || list === void 0 ? void 0 : list.cards.map((card) => card._id);
    const cardIdsQuery = { _id: { $in: cardIds } };
    yield list_model_1.List.findByIdAndDelete(id);
    yield attachment_model_1.Attachment.deleteMany(cardIdsQuery);
    yield checklist_model_1.Checklist.deleteMany(cardIdsQuery);
    yield checklist_model_1.CheckItem.deleteMany(cardIdsQuery);
    yield label_model_1.Label.deleteMany(cardIdsQuery);
    res.status(204).send({ message: 'List deleted successfully' });
    next();
}));

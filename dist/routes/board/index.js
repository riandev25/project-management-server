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
const express_1 = require("express");
const mongodb_1 = require("../../database/mongodb");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const Board_1 = require("../../models/Board");
const router = (0, express_1.Router)();
router.use(mongodb_1.connectToBoards);
router.use((req, res, next) => {
    console.log('inside auth check middlware');
    console.log(req.user);
    if (req.user)
        next();
    else
        res.send(401);
});
router.post('/protected', (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const boardDb = yield Board_1.Board.insertMany(req.body);
    res.send(boardDb);
})));
router.get('/:boardCode/:projectName', (req, res) => {
    const { boardCode, projectName } = req.params;
    res.status(200).send(`${boardCode}, ${projectName}`);
});
exports.default = router;

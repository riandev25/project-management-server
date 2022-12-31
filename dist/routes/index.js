"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("./auth"));
const board_1 = __importDefault(require("./board"));
const mongodb_1 = require("../database/mongodb");
const mongodb_2 = require("../database/mongodb");
const router = (0, express_1.Router)();
router.use(mongodb_1.connectToSessions, mongodb_2.connectToBoards);
// router.get('', (req, res) => {
//   res.status(200).send('Home page');
// });
router.use('/auth', auth_1.default);
router.use('/board', board_1.default);
exports.default = router;

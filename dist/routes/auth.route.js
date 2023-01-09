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
const passport_1 = __importDefault(require("passport"));
const auth_controller_1 = require("../controllers/auth/auth.controller");
// import { connectToSessions } from '../../database/mongodb';
const router = (0, express_1.Router)();
// router.use(connectToSessions);
router.post('/login', passport_1.default.authenticate('local', { failureRedirect: '/login' }), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Logged in');
    res.send(200);
}));
router.post('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            console.log(err);
            return res.redirect('/login');
        }
        res.send('Successfully logged out');
    });
});
router.post('/register', auth_controller_1.authRegisterController);
exports.default = router;

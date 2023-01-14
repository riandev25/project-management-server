"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const auth_controller_1 = require("../controllers/auth/auth.controller");
const router = (0, express_1.Router)();
// router.use(connectToSessions);
router.post('/login', passport_1.default.authenticate('local'), (req, res) => {
    if (req.user) {
        res
            .status(200)
            .send({ status: 'success', message: 'Logged in successfully' });
    }
    else {
        res
            .status(500)
            .send({
            status: 'failed',
            message: 'User not found. Create first an account',
        });
    }
});
router.post('/logout', (req, res, next) => {
    req.session.destroy((err) => {
        if (err)
            return next(err);
    });
    res.clearCookie('session');
    res.send(204);
});
router.post('/register', auth_controller_1.authRegisterController);
exports.default = router;

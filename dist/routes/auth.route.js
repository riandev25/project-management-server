"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const auth_controller_1 = require("../controllers/auth/auth.controller");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const router = (0, express_1.Router)();
router.post('/login', passport_1.default.authenticate('local'), (0, express_async_handler_1.default)((req, res) => {
    console.log(req.cookies);
    if (req.user && req.cookies) {
        console.log(`This is ${req.user} for login`);
        res.status(200).send({
            message: 'Successfully logged in',
            user: req.user,
        });
    }
    else {
        res.status(401).send({ message: 'User not found' });
    }
}));
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

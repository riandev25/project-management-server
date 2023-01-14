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
// router.use(connectToSessions);
router.post('/login', passport_1.default.authenticate('local'), (0, express_async_handler_1.default)((req, res) => {
    if (req.user) {
        res.send(200).send({
            message: 'Successfully logged in',
            session: req.session,
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

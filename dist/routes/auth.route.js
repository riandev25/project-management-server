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
router.post('/login', (req, res, next) => {
    if (req.user)
        res.redirect('/login');
    else
        next();
}, passport_1.default.authenticate('local', {
    failureRedirect: '/login',
}), 
// async (req, res) => {
//   res.status(200).send(req.user);
// }
(req, res) => {
    res.status(200).send({ message: 'Logged in succesfully' });
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

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const router = (0, express_1.Router)();
const login_controller_1 = require("../controllers/auth/login.controller");
const user_jwt_model_1 = require("../models/user.jwt.model");
router.post('/register', (req, res, next) => {
    // Create User
    user_jwt_model_1.UserJwt.register(new user_jwt_model_1.UserJwt({ username: req.body.username }), req.body.password, (err, user) => {
        if (err) {
            console.log(err);
            res.status(500).send({ err: err });
        }
        else {
            // Use passport to authenticate User
            passport_1.default.authenticate('local')(req, res, () => {
                res
                    .status(201)
                    .send({ success: true, status: 'Registration Successful!' });
            });
        }
    });
});
router.post('/login', (req, res, next) => {
    passport_1.default.authenticate('local', (err, user, info) => {
        if (err) {
            console.log(err);
            return next(err);
        }
        if (!user) {
            return res.status(401).json({ success: false, message: info.message });
        }
        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            next();
        });
    })(req, res, next);
}, login_controller_1.loginUser);
router.post('/logout', (req, res, next) => {
    req.session.destroy((err) => {
        if (err)
            return next(err);
    });
    res.clearCookie('session');
    res.send(204);
});
exports.default = router;

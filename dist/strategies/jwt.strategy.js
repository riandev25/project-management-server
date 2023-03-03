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
exports.verifyUser = exports.getToken = void 0;
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = __importDefault(require("passport-local"));
const passport_jwt_1 = require("passport-jwt");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_jwt_model_1 = require("../models/user.jwt.model");
// Local strategy with Passport-Local-Mongoose plugin User.authenticate() function
passport_1.default.use(new passport_local_1.default.Strategy(user_jwt_model_1.UserJwt.authenticate()));
// Required for our support for sessions in Passport.
passport_1.default.serializeUser(user_jwt_model_1.UserJwt.serializeUser());
passport_1.default.deserializeUser(user_jwt_model_1.UserJwt.deserializeUser());
const getToken = (user) => {
    // This helps us to create the JSON Web Token
    return jsonwebtoken_1.default.sign(user, String(process.env.JWT_SECRET), { expiresIn: '30d' });
};
exports.getToken = getToken;
// Options to specify for my JWT based strategy.
const opts = {};
// Specifies how the jsonwebtoken should be extracted from the incoming request message
opts.jwtFromRequest = passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken();
// Supply the secret key to be using within strategy for the sign-in.
opts.secretOrKey = process.env.JWT_SECRET;
// JWT Strategy
passport_1.default.use(new passport_jwt_1.Strategy(opts, (jwt_payload, done) => __awaiter(void 0, void 0, void 0, function* () {
    // Search the user with jwt.payload ID field
    const user = yield user_jwt_model_1.UserJwt.findOne({ _id: jwt_payload._id });
    try {
        if (user)
            return done(null, user);
        else
            return done(null, false);
    }
    catch (err) {
        return done(err, false);
    }
})));
// Verify an incoming user with jwt strategy we just configured above
exports.verifyUser = passport_1.default.authenticate('jwt', { session: false });

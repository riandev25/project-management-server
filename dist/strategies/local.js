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
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = require("passport-local");
const User_1 = require("../models/User");
const passwordHelper_1 = require("../utils/passwordHelper");
passport_1.default.serializeUser((user, done) => {
    console.log('Serializing User...');
    console.log(user);
    done(null, user);
    // done(null, user);
});
passport_1.default.deserializeUser((id, done) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Deserializing User');
    console.log(id);
    try {
        const user = yield User_1.User.findById(id);
        if (!user)
            throw new Error('User not found');
        console.log(user);
        done(null, user);
    }
    catch (err) {
        console.log(err);
        done(err, null);
    }
}));
passport_1.default.use(new passport_local_1.Strategy({
    usernameField: 'email',
}, (email, password, done) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(email);
    console.log(password);
    try {
        if (!email || !password)
            throw new Error('Missing Credentials');
        const userDB = yield User_1.User.findOne({ email });
        if (!userDB)
            throw new Error('User not found');
        const isValid = (0, passwordHelper_1.comparePassword)(password, userDB.password);
        if (isValid) {
            console.log('Authenticated Successfully!');
            done(null, userDB);
        }
        else {
            console.log('Invalid Authentication');
            done(null, null);
        }
    }
    catch (err) {
        console.log(err);
        done(err, null);
    }
})));

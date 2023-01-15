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
const mongodb_1 = require("mongodb");
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = require("passport-local");
const user_model_1 = require("../models/user.model");
const passwordHelper_1 = require("../utils/passwordHelper");
passport_1.default.serializeUser((user, done) => {
    console.log('Serializing User...');
    done(null, user);
});
passport_1.default.deserializeUser((id, done) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Deserializing User');
    try {
        const user = yield user_model_1.User.findById(id, { email: 1, apiKey: 1 });
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
    try {
        if (!email || !password)
            return done(null, false, { message: 'Invalid credentials' });
        const user = yield user_model_1.User.findOne({ email });
        if (!user)
            return done(null, false, { message: 'User not found' });
        const isValid = (0, passwordHelper_1.compareData)(password, user.password);
        if (isValid) {
            console.log('Authenticated Successfully!');
            return done(null, {
                _id: new mongodb_1.ObjectId(user._id),
                email: user.email,
                apiKey: user.apiKey,
            });
        }
        else {
            console.log('Invalid Authentication');
            done(null, false, { message: 'User not found' });
        }
    }
    catch (err) {
        console.log(err);
        done(err, null);
    }
})));
// passport.use(
//   new Strategy(
//     {
//       usernameField: 'email',
//     },
//     async (email, password, done) => {
//       try {
//         if (!email || !password)
//           return done(null, false, { message: 'Invalid credentials' });
//         const user = await User.findOne({ email });
//         if (!user) return done(null, false, { message: 'User not found' });
//         if (user?.apiKey === undefined) {
//           const apiKey = generateApiKey({ method: 'string', length: 32 });
//           const hashedApiKey = hashData(String(apiKey));
//           await User.updateOne({email}, {$set: {apiKey: hashedApiKey}} )
//         }
//         const isValid = compareData(password, user.password);
//         if (isValid) {
//           console.log('Authenticated Successfully!');
//           return done(null, user);
//         } else {
//           console.log('Invalid Authentication');
//           done(null, false, { message: 'User not found' });
//         }
//       } catch (err) {
//         console.log(err);
//         done(err, null);
//       }
//     }
//   )
// );

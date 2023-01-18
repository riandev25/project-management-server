"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const compression_1 = __importDefault(require("compression"));
const express_session_1 = __importDefault(require("express-session"));
const passport_1 = __importDefault(require("passport"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
const routes_1 = __importDefault(require("../routes/routes"));
require("../strategies/local.strategy");
const dotenv = __importStar(require("dotenv"));
require("../utils/cloudinary");
const createApp = () => {
    dotenv.config();
    const app = (0, express_1.default)();
    // Enable cors
    // const corsOptions = {
    //   origin: '*',
    //   credentials: true,
    // };
    app.use((0, cors_1.default)({
        origin: 'http://localhost:3000',
        credentials: true,
    }));
    // app.use(corsHeader);
    // Compressed to gzip file
    app.use((0, compression_1.default)());
    app.use(express_1.default.static('dist'));
    // Enable parsing Middleware for Request
    app.use(express_1.default.json());
    // app.use(express.urlencoded({ extended: true }));
    app.use((0, cookie_parser_1.default)());
    app.use((0, express_session_1.default)({
        secret: 'session',
        resave: false,
        saveUninitialized: false,
        cookie: {
            sameSite: 'none',
            secure: true,
            maxAge: 30 * 24 * 60 * 60 * 1000,
        },
        store: connect_mongo_1.default.create({
            mongoUrl: process.env.MONGO_SESSION_URI,
        }),
    }));
    app.use(passport_1.default.initialize());
    app.use(passport_1.default.session());
    app.use('/api', routes_1.default);
    return app;
};
exports.createApp = createApp;

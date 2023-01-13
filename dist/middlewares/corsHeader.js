"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsHeader = void 0;
const corsHeader = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    // res.setHeader('Access-Control-Allow-Credentials', 'true');
    // res.setHeader('Access-Control-Max-Age', '1800');
    // res.setHeader('Access-Control-Allow-Headers', 'content-type');
    // res.setHeader(
    //   'Access-Control-Allow-Methods',
    //   'PUT, POST, GET, DELETE, PATCH, OPTIONS'
    // );
    next();
};
exports.corsHeader = corsHeader;

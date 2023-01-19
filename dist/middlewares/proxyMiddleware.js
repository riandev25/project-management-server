"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proxyMiddlware = void 0;
const http_proxy_middleware_1 = require("http-proxy-middleware");
const proxyMiddlware = (req, res, next) => {
    const proxyOptions = {
        target: 'https://taskaccio.onrender.com',
        changeOrigin: true,
    };
    (0, http_proxy_middleware_1.createProxyMiddleware)(proxyOptions);
    next();
};
exports.proxyMiddlware = proxyMiddlware;

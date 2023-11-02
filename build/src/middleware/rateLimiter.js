"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_rate_limit_1 = require("express-rate-limit");
// Rate limit middleware
const rateLimitMiddleware = (0, express_rate_limit_1.rateLimit)({
    windowMs: 15 * 60 * 1000,
    message: "Too many requests, please try again later.",
    max: 100,
    standardHeaders: true,
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
exports.default = rateLimitMiddleware;

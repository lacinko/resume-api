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
exports.verifyAccess = void 0;
const appError_1 = __importDefault(require("../utils/appError"));
const config_1 = __importDefault(require("config"));
const verifyAccess = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let access_token;
        if (req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")) {
            access_token = req.headers.authorization.split(" ")[1];
        }
        else if (req.cookies.access_token) {
            access_token = req.cookies.access_token;
        }
        if (!access_token) {
            return next(new appError_1.default(401, "You are not logged in"));
        }
        // Validate the access token
        const decoded = access_token === config_1.default.get("accessToken");
        if (!decoded) {
            return next(new appError_1.default(401, `Invalid token or user doesn't exist`));
        }
        next();
    }
    catch (err) {
        next(err);
    }
});
exports.verifyAccess = verifyAccess;

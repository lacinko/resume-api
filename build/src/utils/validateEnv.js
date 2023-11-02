"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envalid_1 = require("envalid");
const validateEnv = () => {
    (0, envalid_1.cleanEnv)(process.env, {
        NODE_ENV: (0, envalid_1.str)(),
        PORT: (0, envalid_1.port)(),
        POSTGRES_DB: (0, envalid_1.str)(),
        POSTGRES_USER: (0, envalid_1.str)(),
        POSTGRES_PASSWORD: (0, envalid_1.str)(),
        POSTGRES_SERVER: (0, envalid_1.str)(),
        POSTGRES_PORT: (0, envalid_1.port)(),
    });
};
exports.default = validateEnv;

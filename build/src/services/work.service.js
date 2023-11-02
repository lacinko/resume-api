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
exports.deleteRole = exports.updateRole = exports.getRoles = exports.getRole = exports.createRole = exports.deleteCompany = exports.updateCompany = exports.getCompanies = exports.getCompany = exports.createCompany = void 0;
const connectPrisma_1 = __importDefault(require("../utils/connectPrisma"));
const createCompany = (input) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield connectPrisma_1.default.company.create({
        data: input,
    }));
});
exports.createCompany = createCompany;
const getCompany = (where, select, include) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield connectPrisma_1.default.company.findFirst(Object.assign(Object.assign({ where }, (!select && include && { include })), (!include && select && { select }))));
});
exports.getCompany = getCompany;
const getCompanies = (where, select, include, orderBy, take) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield connectPrisma_1.default.company.findMany(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (where && { where })), (!select && include && { include })), (!include && select && { select })), (orderBy && { orderBy })), (take && { take }))));
});
exports.getCompanies = getCompanies;
const updateCompany = (where, input, select, include) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield connectPrisma_1.default.company.update(Object.assign(Object.assign({ where, data: input }, (!select && include && { include })), (!include && select && { select }))));
});
exports.updateCompany = updateCompany;
const deleteCompany = (where, select) => __awaiter(void 0, void 0, void 0, function* () {
    return yield connectPrisma_1.default.company.delete({
        where,
        select,
    });
});
exports.deleteCompany = deleteCompany;
const createRole = (input) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield connectPrisma_1.default.role.create({
        data: input,
    }));
});
exports.createRole = createRole;
const getRole = (where, select, include) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield connectPrisma_1.default.role.findFirst(Object.assign(Object.assign({ where }, (!select && include && { include })), (!include && select && { select }))));
});
exports.getRole = getRole;
const getRoles = (where, select, include, orderBy, take) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield connectPrisma_1.default.role.findMany(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (where && { where })), (!select && include && { include })), (!include && select && { select })), (orderBy && { orderBy })), (take && { take }))));
});
exports.getRoles = getRoles;
const updateRole = (where, input, select, include) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield connectPrisma_1.default.role.update(Object.assign(Object.assign({ where, data: input }, (!select && include && { include })), (!include && select && { select }))));
});
exports.updateRole = updateRole;
const deleteRole = (where, select) => __awaiter(void 0, void 0, void 0, function* () {
    return yield connectPrisma_1.default.role.delete({
        where,
        select,
    });
});
exports.deleteRole = deleteRole;

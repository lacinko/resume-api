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
exports.deleteEstablishment = exports.updateEstablishment = exports.getEstablishments = exports.getEstablishment = exports.createEstablishment = exports.deleteEducation = exports.updateEducation = exports.getEducations = exports.getEducation = exports.createEducation = void 0;
const connectPrisma_1 = __importDefault(require("../utils/connectPrisma"));
const createEducation = (input) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield connectPrisma_1.default.education.create({
        data: input,
    }));
});
exports.createEducation = createEducation;
const getEducation = (where, select, include) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield connectPrisma_1.default.education.findFirst(Object.assign(Object.assign({ where }, (!select && include && { include })), (!include && select && { select }))));
});
exports.getEducation = getEducation;
const getEducations = (where, select, include, orderBy, take) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield connectPrisma_1.default.education.findMany(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (where && { where })), (!select && include && { include })), (!include && select && { select })), (orderBy && { orderBy })), (take && { take }))));
});
exports.getEducations = getEducations;
const updateEducation = (where, input, select, include) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield connectPrisma_1.default.education.update(Object.assign(Object.assign({ where, data: input }, (!select && include && { include })), (!include && select && { select }))));
});
exports.updateEducation = updateEducation;
const deleteEducation = (where, select) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield connectPrisma_1.default.education.delete({
        where,
        select,
    }));
});
exports.deleteEducation = deleteEducation;
const createEstablishment = (input) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield connectPrisma_1.default.establishment.create({
        data: input,
    }));
});
exports.createEstablishment = createEstablishment;
const getEstablishment = (where, select, include) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield connectPrisma_1.default.establishment.findFirst(Object.assign(Object.assign({ where }, (!select && include && { include })), (!include && select && { select }))));
});
exports.getEstablishment = getEstablishment;
const getEstablishments = (where, select, include, orderBy, take) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield connectPrisma_1.default.establishment.findMany(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (where && { where })), (!select && include && { include })), (!include && select && { select })), (orderBy && { orderBy })), (take && { take }))));
});
exports.getEstablishments = getEstablishments;
const updateEstablishment = (where, input, select, include) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield connectPrisma_1.default.establishment.update(Object.assign(Object.assign({ where, data: input }, (!select && include && { include })), (!include && select && { select }))));
});
exports.updateEstablishment = updateEstablishment;
const deleteEstablishment = (where, select) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield connectPrisma_1.default.establishment.delete({
        where,
        select,
    }));
});
exports.deleteEstablishment = deleteEstablishment;

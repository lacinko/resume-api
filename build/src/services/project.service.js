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
exports.deleteTag = exports.updateTag = exports.getTags = exports.getTag = exports.createTag = exports.deleteProject = exports.updateProject = exports.getProjects = exports.getProject = exports.createProject = void 0;
const connectPrisma_1 = __importDefault(require("../utils/connectPrisma"));
const createProject = (input) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield connectPrisma_1.default.project.create({
        data: input,
    }));
});
exports.createProject = createProject;
const getProject = (where, select, include) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield connectPrisma_1.default.project.findFirst(Object.assign(Object.assign({ where }, (!select && include && { include })), (!include && select && { select }))));
});
exports.getProject = getProject;
const getProjects = (where, select, include, orderBy, take) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield connectPrisma_1.default.project.findMany(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (where && { where })), (!select && include && { include })), (!include && select && { select })), (orderBy && { orderBy })), (take && { take }))));
});
exports.getProjects = getProjects;
const updateProject = (where, input, select, include) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield connectPrisma_1.default.project.update(Object.assign(Object.assign({ where, data: input }, (!select && include && { include })), (!include && select && { select }))));
});
exports.updateProject = updateProject;
const deleteProject = (where, select) => __awaiter(void 0, void 0, void 0, function* () {
    return yield connectPrisma_1.default.project.delete({
        where,
        select,
    });
});
exports.deleteProject = deleteProject;
const createTag = (input) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield connectPrisma_1.default.tag.create({
        data: input,
    }));
});
exports.createTag = createTag;
const getTag = (where, select, include) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield connectPrisma_1.default.tag.findFirst(Object.assign(Object.assign({ where }, (!select && include && { include })), (!include && select && { select }))));
});
exports.getTag = getTag;
const getTags = (where, select, include, orderBy, take) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield connectPrisma_1.default.tag.findMany(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (where && { where })), (!select && include && { include })), (!include && select && { select })), (orderBy && { orderBy })), (take && { take }))));
});
exports.getTags = getTags;
const updateTag = (where, input, select, include) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield connectPrisma_1.default.tag.update(Object.assign(Object.assign({ where, data: input }, (!select && include && { include })), (!include && select && { select }))));
});
exports.updateTag = updateTag;
const deleteTag = (where, select) => __awaiter(void 0, void 0, void 0, function* () {
    return yield connectPrisma_1.default.tag.delete({
        where,
        select,
    });
});
exports.deleteTag = deleteTag;

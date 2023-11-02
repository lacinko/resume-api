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
exports.deleteSkill = exports.updateSkill = exports.getSkills = exports.getSkill = exports.createSkill = void 0;
const connectPrisma_1 = __importDefault(require("../utils/connectPrisma"));
const createSkill = (input) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield connectPrisma_1.default.skill.create({
        data: input,
    }));
});
exports.createSkill = createSkill;
const getSkill = (where, select, include) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield connectPrisma_1.default.skill.findFirst(Object.assign(Object.assign({ where }, (!select && include && { include })), (!include && select && { select }))));
});
exports.getSkill = getSkill;
const getSkills = (where, select, include, orderBy, take) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield connectPrisma_1.default.skill.findMany(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (where && { where })), (!select && include && { include })), (!include && select && { select })), (orderBy && { orderBy })), (take && { take }))));
});
exports.getSkills = getSkills;
const updateSkill = (where, input, select, include) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield connectPrisma_1.default.skill.update(Object.assign(Object.assign({ where, data: input }, (!select && include && { include })), (!include && select && { select }))));
});
exports.updateSkill = updateSkill;
const deleteSkill = (where, select) => __awaiter(void 0, void 0, void 0, function* () {
    return yield connectPrisma_1.default.skill.delete({
        where,
        select,
    });
});
exports.deleteSkill = deleteSkill;

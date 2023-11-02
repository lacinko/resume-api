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
exports.deleteSkillHandler = exports.updateSkillHandler = exports.getSkillsHandler = exports.getSkillHandler = exports.createSkillHandler = void 0;
const skill_service_1 = require("../services/skill.service");
const utilsFunctions_1 = require("../utils/utilsFunctions");
const appError_1 = __importDefault(require("../utils/appError"));
const createSkillHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const skill = yield (0, skill_service_1.createSkill)(req.body);
        res.status(201).json({
            status: "success",
            skill,
        });
    }
    catch (error) {
        if (error.code === "P2002") {
            return res.status(409).json({
                status: "fail",
                message: "Skill with that name already exist",
            });
        }
        next(error);
    }
});
exports.createSkillHandler = createSkillHandler;
const getSkillHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { select, include } = (0, utilsFunctions_1.createObjectFromURLParamsAttributes)(req.query);
        const skill = yield (0, skill_service_1.getSkill)({ id: req.params.skillId }, select, include);
        if (!skill) {
            return next(new appError_1.default(404, "Skill not found"));
        }
        res.status(200).json({
            status: "success",
            skill,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getSkillHandler = getSkillHandler;
const getSkillsHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { where, select, include, orderBy, take } = (0, utilsFunctions_1.createObjectFromURLParamsAttributes)(req.query);
        const skills = yield (0, skill_service_1.getSkills)(where, select, include, orderBy, take);
        if (!skills) {
            return next(new appError_1.default(404, "Skills not found"));
        }
        res.status(200).json({
            status: "success",
            skills,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getSkillsHandler = getSkillsHandler;
const updateSkillHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const skill = yield (0, skill_service_1.getSkill)({ id: req.params.skillId });
        if (!skill) {
            return next(new appError_1.default(404, "Skill with that ID not found"));
        }
        const updatedSkill = yield (0, skill_service_1.updateSkill)({ id: req.params.skillId }, req.body);
        res.status(200).json({
            status: "success",
            updatedSkill,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateSkillHandler = updateSkillHandler;
const deleteSkillHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const skill = yield (0, skill_service_1.getSkill)({ id: req.params.skillId });
        if (!skill) {
            return next(new appError_1.default(404, "Skill with that ID not found"));
        }
        yield (0, skill_service_1.deleteSkill)({ id: req.params.skillId });
        res.status(204).json({
            status: "success",
            data: null,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteSkillHandler = deleteSkillHandler;

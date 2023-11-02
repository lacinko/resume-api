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
exports.deleteTagHandler = exports.updateTagHandler = exports.getTagsHandler = exports.getTagHandler = exports.createTagHandler = exports.deleteProjectHandler = exports.updateProjectHandler = exports.getProjectsHandler = exports.getProjectHandler = exports.createProjectHandler = void 0;
const project_service_1 = require("../services/project.service");
const appError_1 = __importDefault(require("../utils/appError"));
const utilsFunctions_1 = require("../utils/utilsFunctions");
const createProjectHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const project = yield (0, project_service_1.createProject)(req.body);
        res.status(201).json({
            status: "success",
            project,
        });
    }
    catch (error) {
        if (error.code === "P2002") {
            return res.status(409).json({
                status: "fail",
                message: "Project with that name already exist",
            });
        }
        next(error);
    }
});
exports.createProjectHandler = createProjectHandler;
const getProjectHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { select, include } = (0, utilsFunctions_1.createObjectFromURLParamsAttributes)(req.query);
        const project = yield (0, project_service_1.getProject)({ id: req.params.projectId }, select, include);
        if (!project) {
            return new appError_1.default(404, "Project not found");
        }
        res.status(200).json({
            status: "success",
            project,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getProjectHandler = getProjectHandler;
const getProjectsHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { where, select, include, orderBy, take } = (0, utilsFunctions_1.createObjectFromURLParamsAttributes)(req.query);
        const projects = yield (0, project_service_1.getProjects)(where, select, include, orderBy, take);
        if (!projects) {
            return next(new appError_1.default(404, "Projects not found"));
        }
        res.status(200).json({
            status: "success",
            projects,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getProjectsHandler = getProjectsHandler;
const updateProjectHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const project = yield (0, project_service_1.getProject)({ id: req.params.projectId });
        if (!project) {
            return next(new appError_1.default(404, "Project not found"));
        }
        const updatedProject = yield (0, project_service_1.updateProject)({ id: req.params.projectId }, req.body);
        res.status(200).json({
            status: "success",
            updatedProject,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.updateProjectHandler = updateProjectHandler;
const deleteProjectHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const project = yield (0, project_service_1.getProject)({ id: req.params.projectId });
        if (!project) {
            return next(new appError_1.default(404, "Project not found"));
        }
        yield (0, project_service_1.deleteProject)({ id: req.params.projectId });
        res.status(200).json({
            status: "success",
            data: null,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.deleteProjectHandler = deleteProjectHandler;
const createTagHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tag = yield (0, project_service_1.createTag)(req.body);
        res.status(201).json({
            status: "success",
            tag,
        });
    }
    catch (error) {
        if (error.code === "P2002") {
            return res.status(409).json({
                status: "fail",
                message: "Tag with that name already exist",
            });
        }
        next(error);
    }
});
exports.createTagHandler = createTagHandler;
const getTagHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { select, include } = (0, utilsFunctions_1.createObjectFromURLParamsAttributes)(req.query);
        const tag = yield (0, project_service_1.getTag)({ id: req.params.tagId }, select, include);
        if (!tag) {
            return new appError_1.default(404, "Tag not found");
        }
        res.status(200).json({
            status: "success",
            tag,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getTagHandler = getTagHandler;
const getTagsHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { where, select, include, orderBy, take } = (0, utilsFunctions_1.createObjectFromURLParamsAttributes)(req.query);
        const tags = yield (0, project_service_1.getTags)(where, select, include, orderBy, take);
        if (!tags) {
            return next(new appError_1.default(404, "Tags not found"));
        }
        res.status(200).json({
            status: "success",
            tags,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getTagsHandler = getTagsHandler;
const updateTagHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tag = yield (0, project_service_1.getTag)({ id: req.params.tagId });
        if (!tag) {
            return next(new appError_1.default(404, "Tag not found"));
        }
        const updatedTag = yield (0, project_service_1.updateTag)({ id: req.params.tagId }, req.body);
        res.status(200).json({
            status: "success",
            updatedTag,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.updateTagHandler = updateTagHandler;
const deleteTagHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tag = yield (0, project_service_1.getTag)({ id: req.params.tagId });
        if (!tag) {
            return next(new appError_1.default(404, "Tag not found"));
        }
        yield (0, project_service_1.deleteTag)({ id: req.params.tagId });
        res.status(200).json({
            status: "success",
            data: null,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.deleteTagHandler = deleteTagHandler;

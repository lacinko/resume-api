"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const project_schema_1 = require("../schemas/project.schema");
const project_contoller_1 = require("../controllers/project.contoller");
const validate_1 = require("../middleware/validate");
const verifyAccess_1 = require("../middleware/verifyAccess");
const router = express_1.default.Router();
router
    .route("/")
    .get(project_contoller_1.getProjectsHandler)
    .post(verifyAccess_1.verifyAccess, (0, validate_1.validate)(project_schema_1.createProjectSchema), project_contoller_1.createProjectHandler);
router
    .route("/tags")
    .get(project_contoller_1.getTagsHandler)
    .post(verifyAccess_1.verifyAccess, (0, validate_1.validate)(project_schema_1.createTagSchema), project_contoller_1.createTagHandler);
router
    .route("/:projectId")
    .get((0, validate_1.validate)(project_schema_1.getProjectSchema), project_contoller_1.getProjectHandler)
    .patch(verifyAccess_1.verifyAccess, (0, validate_1.validate)(project_schema_1.updateProjectSchema), project_contoller_1.updateProjectHandler)
    .delete(verifyAccess_1.verifyAccess, (0, validate_1.validate)(project_schema_1.deleteProjectSchema), project_contoller_1.deleteProjectHandler);
router
    .route("/tags/:tagId")
    .get((0, validate_1.validate)(project_schema_1.getTagSchema), project_contoller_1.getTagHandler)
    .patch(verifyAccess_1.verifyAccess, (0, validate_1.validate)(project_schema_1.updateTagSchema), project_contoller_1.updateTagHandler)
    .delete(verifyAccess_1.verifyAccess, (0, validate_1.validate)(project_schema_1.deleteTagSchema), project_contoller_1.deleteTagHandler);
exports.default = router;

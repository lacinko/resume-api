"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validate_1 = require("../middleware/validate");
const verifyAccess_1 = require("../middleware/verifyAccess");
const skill_controller_1 = require("../controllers/skill.controller");
const skill_schema_1 = require("../schemas/skill.schema");
const router = express_1.default.Router();
router
    .route("/")
    .get(skill_controller_1.getSkillsHandler)
    .post(verifyAccess_1.verifyAccess, (0, validate_1.validate)(skill_schema_1.createSkillSchema), skill_controller_1.createSkillHandler);
router
    .route("/:skillId")
    .get((0, validate_1.validate)(skill_schema_1.getSkillSchema), skill_controller_1.getSkillHandler)
    .patch(verifyAccess_1.verifyAccess, (0, validate_1.validate)(skill_schema_1.updateSkillSchema), skill_controller_1.updateSkillHandler)
    .delete(verifyAccess_1.verifyAccess, (0, validate_1.validate)(skill_schema_1.deleteSkillSchema), skill_controller_1.deleteSkillHandler);
exports.default = router;

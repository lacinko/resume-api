"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const work_controller_1 = require("../controllers/work.controller");
const validate_1 = require("../middleware/validate");
const work_schema_1 = require("../schemas/work.schema");
const verifyAccess_1 = require("../middleware/verifyAccess");
const router = express_1.default.Router();
router
    .route("/companies")
    .get(work_controller_1.getCompaniesHandler)
    .post(verifyAccess_1.verifyAccess, (0, validate_1.validate)(work_schema_1.createCompanySchema), work_controller_1.createCompanyHandler);
router
    .route("/companies/:companyId")
    .get((0, validate_1.validate)(work_schema_1.getCompanySchema), work_controller_1.getCompanyHandler)
    .patch(verifyAccess_1.verifyAccess, (0, validate_1.validate)(work_schema_1.updateCompanySchema), work_controller_1.updateCompanyHandler)
    .delete(verifyAccess_1.verifyAccess, (0, validate_1.validate)(work_schema_1.deleteCompanySchema), work_controller_1.deleteCompanyHandler);
router
    .route("/roles")
    .get(work_controller_1.getRolesHandler)
    .post(verifyAccess_1.verifyAccess, (0, validate_1.validate)(work_schema_1.createRoleSchema), work_controller_1.createRoleHandler);
router
    .route("/roles/:roleId")
    .get((0, validate_1.validate)(work_schema_1.getRoleSchema), work_controller_1.getRoleHandler)
    .patch(verifyAccess_1.verifyAccess, (0, validate_1.validate)(work_schema_1.updateRoleSchema), work_controller_1.updateRoleHandler)
    .delete(verifyAccess_1.verifyAccess, (0, validate_1.validate)(work_schema_1.deleteRoleSchema), work_controller_1.deleteRoleHandler);
exports.default = router;

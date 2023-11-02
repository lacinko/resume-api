"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validate_1 = require("../middleware/validate");
const education_controller_1 = require("../controllers/education.controller");
const verifyAccess_1 = require("../middleware/verifyAccess");
const education_schema_1 = require("../schemas/education.schema");
const work_schema_1 = require("../schemas/work.schema");
const router = express_1.default.Router();
router
    .route("/")
    .get(education_controller_1.getEducationsHandler)
    .post(verifyAccess_1.verifyAccess, (0, validate_1.validate)(education_schema_1.createEducationSchema), education_controller_1.createEducationHandler);
router
    .route("/establishments")
    .get(education_controller_1.getEstablishmentsHandler)
    .post(verifyAccess_1.verifyAccess, (0, validate_1.validate)(education_schema_1.createEstablishmentSchema), education_controller_1.createEstablishmentHandler);
router
    .route("/:educationId")
    .get(education_controller_1.getEducationHandler)
    .patch(verifyAccess_1.verifyAccess, (0, validate_1.validate)(work_schema_1.updateCompanySchema), education_controller_1.updateEducationHandler)
    .delete(verifyAccess_1.verifyAccess, (0, validate_1.validate)(education_schema_1.deleteEducationSchema), education_controller_1.deleteEducationHandler);
router
    .route("/establishments/:establishmentId")
    .get(education_controller_1.getEstablishmentHandler)
    .patch(verifyAccess_1.verifyAccess, (0, validate_1.validate)(education_schema_1.updateEstablishmentSchema), education_controller_1.updateEstablishmentHandler)
    .delete(verifyAccess_1.verifyAccess, (0, validate_1.validate)(education_schema_1.deleteEstablishmentSchema), education_controller_1.deleteEstablishmentHandler);
exports.default = router;

import express from "express";
import {
  createCompanyHandler,
  createRoleHandler,
  deleteCompanyHandler,
  deleteRoleHandler,
  getCompaniesHandler,
  getCompanyHandler,
  getRoleHandler,
  getRolesHandler,
  updateCompanyHandler,
  updateRoleHandler,
} from "../controllers/work.controller";
import { validate } from "../middleware/validate";
import {
  createCompanySchema,
  createRoleSchema,
  deleteCompanySchema,
  deleteRoleSchema,
  getCompanySchema,
  getRoleSchema,
  updateCompanySchema,
  updateRoleSchema,
} from "../schemas/work.schema";
import { verifyAccess } from "../middleware/verifyAccess";

const router = express.Router();

router
  .route("/companies")
  .get(getCompaniesHandler)
  .post(verifyAccess, validate(createCompanySchema), createCompanyHandler);

router
  .route("/companies/:companyId")
  .get(validate(getCompanySchema), getCompanyHandler)
  .patch(verifyAccess, validate(updateCompanySchema), updateCompanyHandler)
  .delete(verifyAccess, validate(deleteCompanySchema), deleteCompanyHandler);

router
  .route("/roles")
  .get(getRolesHandler)
  .post(verifyAccess, validate(createRoleSchema), createRoleHandler);

router
  .route("/roles/:roleId")
  .get(validate(getRoleSchema), getRoleHandler)
  .patch(verifyAccess, validate(updateRoleSchema), updateRoleHandler)
  .delete(verifyAccess, validate(deleteRoleSchema), deleteRoleHandler);

export default router;

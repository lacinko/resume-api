import express from "express";
import { validate } from "../middleware/validate";
import { verifyAccess } from "../middleware/verifyAccess";
import {
  createSkillHandler,
  deleteSkillHandler,
  getSkillHandler,
  getSkillsHandler,
  updateSkillHandler,
} from "../controllers/skill.controller";
import {
  createSkillSchema,
  deleteSkillSchema,
  getSkillSchema,
  updateSkillSchema,
} from "../schemas/skill.schema";

const router = express.Router();

router
  .route("/")
  .get(getSkillsHandler)
  .post(verifyAccess, validate(createSkillSchema), createSkillHandler);

router
  .route("/:skillId")
  .get(validate(getSkillSchema), getSkillHandler)
  .patch(verifyAccess, validate(updateSkillSchema), updateSkillHandler)
  .delete(verifyAccess, validate(deleteSkillSchema), deleteSkillHandler);

export default router;

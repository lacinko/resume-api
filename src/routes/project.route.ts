import express from "express";
import {
  createProjectSchema,
  createTagSchema,
  deleteProjectSchema,
  deleteTagSchema,
  getProjectSchema,
  getTagSchema,
  updateProjectSchema,
  updateTagSchema,
} from "../schemas/project.schema";
import {
  createProjectHandler,
  createTagHandler,
  deleteProjectHandler,
  deleteTagHandler,
  getProjectHandler,
  getProjectsHandler,
  getTagHandler,
  getTagsHandler,
  updateProjectHandler,
  updateTagHandler,
} from "../controllers/project.contoller";
import { validate } from "../middleware/validate";
import { verifyAccess } from "../middleware/verifyAccess";

const router = express.Router();

router
  .route("/")
  .get(getProjectsHandler)
  .post(verifyAccess, validate(createProjectSchema), createProjectHandler);

router
  .route("/tags")
  .get(getTagsHandler)
  .post(verifyAccess, validate(createTagSchema), createTagHandler);

router
  .route("/:projectId")
  .get(validate(getProjectSchema), getProjectHandler)
  .patch(verifyAccess, validate(updateProjectSchema), updateProjectHandler)
  .delete(verifyAccess, validate(deleteProjectSchema), deleteProjectHandler);

router
  .route("/tags/:tagId")
  .get(validate(getTagSchema), getTagHandler)
  .patch(verifyAccess, validate(updateTagSchema), updateTagHandler)
  .delete(verifyAccess, validate(deleteTagSchema), deleteTagHandler);

export default router;

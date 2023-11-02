import express from "express";
import { validate } from "../middleware/validate";
import {
  createEducationHandler,
  createEstablishmentHandler,
  deleteEducationHandler,
  deleteEstablishmentHandler,
  getEducationHandler,
  getEducationsHandler,
  getEstablishmentHandler,
  getEstablishmentsHandler,
  updateEducationHandler,
  updateEstablishmentHandler,
} from "../controllers/education.controller";
import { verifyAccess } from "../middleware/verifyAccess";
import {
  createEducationSchema,
  createEstablishmentSchema,
  deleteEducationSchema,
  deleteEstablishmentSchema,
  updateEstablishmentSchema,
} from "../schemas/education.schema";
import { updateCompanySchema } from "../schemas/work.schema";

const router = express.Router();

router
  .route("/")
  .get(getEducationsHandler)
  .post(verifyAccess, validate(createEducationSchema), createEducationHandler);

router
  .route("/establishments")
  .get(getEstablishmentsHandler)
  .post(
    verifyAccess,
    validate(createEstablishmentSchema),
    createEstablishmentHandler
  );

router
  .route("/:educationId")
  .get(getEducationHandler)
  .patch(verifyAccess, validate(updateCompanySchema), updateEducationHandler)
  .delete(
    verifyAccess,
    validate(deleteEducationSchema),
    deleteEducationHandler
  );

router
  .route("/establishments/:establishmentId")
  .get(getEstablishmentHandler)
  .patch(
    verifyAccess,
    validate(updateEstablishmentSchema),
    updateEstablishmentHandler
  )
  .delete(
    verifyAccess,
    validate(deleteEstablishmentSchema),
    deleteEstablishmentHandler
  );

export default router;

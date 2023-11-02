import { NextFunction, Request, Response } from "express";
import {
  CreateEducationInput,
  CreateEstablishmentInput,
  DeleteEducationInput,
  DeleteEstablishmentInput,
  GetEducationInput,
  GetEstablishmentInput,
  UpdateEducationInput,
  UpdateEstablishmentInput,
} from "../schemas/education.schema";
import {
  createEducation,
  createEstablishment,
  deleteEducation,
  deleteEstablishment,
  getEducation,
  getEducations,
  getEstablishment,
  getEstablishments,
  updateEducation,
  updateEstablishment,
} from "../services/education.service";
import AppError from "../utils/appError";
import {
  GenericObject,
  createObjectFromURLParamsAttributes,
} from "../utils/utilsFunctions";
import { Prisma } from "@prisma/client";

export const createEducationHandler = async (
  req: Request<{}, {}, CreateEducationInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const education = await createEducation(req.body);

    res.status(201).json({
      status: "success",
      education,
    });
  } catch (error: any) {
    if (error.code === "P2002") {
      return res.status(409).json({
        status: "fail",
        message: "Education with that name already exist",
      });
    }

    next(error);
  }
};

export const getEducationHandler = async (
  req: Request<GetEducationInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { select } = createObjectFromURLParamsAttributes(
      req.query as GenericObject
    );

    const education = await getEducation(
      { id: req.params.educationId },
      select as Prisma.EducationSelect
    );

    if (!education) {
      throw new AppError(404, "Education not found");
    }

    res.status(200).json({
      status: "success",
      education,
    });
  } catch (error) {
    next(error);
  }
};

export const getEducationsHandler = async (
  req: Request<GetEducationInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { where, select, include, orderBy, take } =
      createObjectFromURLParamsAttributes(req.query as GenericObject);

    const educations = await getEducations(
      where as Prisma.EducationWhereInput,
      select as Prisma.EducationSelect,
      include as Prisma.EducationInclude,
      orderBy as Prisma.EducationOrderByWithAggregationInput,
      take as number
    );

    if (!educations) {
      return next(new AppError(404, "Educations not found"));
    }

    res.status(200).json({
      status: "success",
      educations,
    });
  } catch (error: any) {
    next(error);
  }
};

export const updateEducationHandler = async (
  req: Request<
    UpdateEducationInput["params"],
    {},
    UpdateEducationInput["body"]
  >,
  res: Response,
  next: NextFunction
) => {
  try {
    const education = await getEducation({ id: req.params.educationId });

    if (!education) {
      return next(new AppError(404, "Education with that ID not found"));
    }

    const updatedCompany = await updateEducation(
      { id: req.params.educationId },
      req.body
    );

    res.status(200).json({
      status: "success",
      updatedCompany,
    });
  } catch (err: any) {
    next(err);
  }
};

export const deleteEducationHandler = async (
  req: Request<DeleteEducationInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const education = await getEducation({ id: req.params.educationId });

    if (!education) {
      return next(new AppError(404, "Education with that ID not found"));
    }

    await deleteEducation({ id: req.params.educationId });

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err: any) {
    next(err);
  }
};

export const createEstablishmentHandler = async (
  req: Request<{}, {}, CreateEstablishmentInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const establishment = await createEstablishment(req.body);

    res.status(201).json({
      status: "success",
      establishment,
    });
  } catch (error: any) {
    if (error.code === "P2002") {
      return res.status(409).json({
        status: "fail",
        message: "Establishment with that name already exist",
      });
    }

    next(error);
  }
};

export const getEstablishmentHandler = async (
  req: Request<GetEstablishmentInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { select, include } = createObjectFromURLParamsAttributes(
      req.query as GenericObject
    );

    const establishment = await getEstablishment(
      { id: req.params.establishmentId },
      select as Prisma.EstablishmentSelect,
      include as Prisma.EstablishmentInclude
    );

    if (!establishment) {
      throw new AppError(404, "Establishment not found");
    }

    res.status(200).json({
      status: "success",
      establishment,
    });
  } catch (error) {
    next(error);
  }
};

export const getEstablishmentsHandler = async (
  req: Request<GetEstablishmentInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { where, select, include, orderBy, take } =
      createObjectFromURLParamsAttributes(req.query as GenericObject);

    const establishments = await getEstablishments(
      where as Prisma.EstablishmentWhereInput,
      select as Prisma.EstablishmentSelect,
      include as Prisma.EstablishmentInclude,
      orderBy as Prisma.EstablishmentOrderByWithAggregationInput,
      take as number
    );

    if (!establishments) {
      return next(new AppError(404, "Establishments not found"));
    }

    res.status(200).json({
      status: "success",
      establishments,
    });
  } catch (error: any) {
    next(error);
  }
};

export const updateEstablishmentHandler = async (
  req: Request<
    UpdateEstablishmentInput["params"],
    {},
    UpdateEstablishmentInput["body"]
  >,
  res: Response,
  next: NextFunction
) => {
  try {
    const establishment = await getEstablishment({
      id: req.params.establishmentId,
    });

    if (!establishment) {
      return next(new AppError(404, "Establishment with that ID not found"));
    }

    const updatedEstablishment = await updateEstablishment(
      { id: req.params.establishmentId },
      req.body
    );

    res.status(200).json({
      status: "success",
      updatedEstablishment,
    });
  } catch (err: any) {
    next(err);
  }
};

export const deleteEstablishmentHandler = async (
  req: Request<DeleteEstablishmentInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const establishment = await getEstablishment({
      id: req.params.establishmentId,
    });

    if (!establishment) {
      return next(new AppError(404, "Establishment with that ID not found"));
    }

    await deleteEstablishment({ id: req.params.establishmentId });

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err: any) {
    next(err);
  }
};

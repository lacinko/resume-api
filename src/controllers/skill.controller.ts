import { NextFunction, Request, Response } from "express";
import {
  CreateSkillInput,
  DeleteSkillInput,
  GetSkillInput,
  UpdateSkillInput,
} from "../schemas/skill.schema";
import {
  createSkill,
  deleteSkill,
  getSkill,
  getSkills,
  updateSkill,
} from "../services/skill.service";
import {
  GenericObject,
  createObjectFromURLParamsAttributes,
} from "../utils/utilsFunctions";
import { Prisma } from "@prisma/client";
import AppError from "../utils/appError";

export const createSkillHandler = async (
  req: Request<{}, {}, CreateSkillInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const skill = await createSkill(req.body);

    res.status(201).json({
      status: "success",
      skill,
    });
  } catch (error: any) {
    if (error.code === "P2002") {
      return res.status(409).json({
        status: "fail",
        message: "Skill with that name already exist",
      });
    }
    next(error);
  }
};

export const getSkillHandler = async (
  req: Request<GetSkillInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { select, include } = createObjectFromURLParamsAttributes(
      req.query as GenericObject
    );

    const skill = await getSkill(
      { id: req.params.skillId },
      select as Prisma.SkillSelect,
      include as Prisma.SkillInclude
    );

    if (!skill) {
      return next(new AppError(404, "Skill not found"));
    }

    res.status(200).json({
      status: "success",
      skill,
    });
  } catch (error: any) {
    next(error);
  }
};

export const getSkillsHandler = async (
  req: Request<GetSkillInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { where, select, include, orderBy, take } =
      createObjectFromURLParamsAttributes(req.query as GenericObject);

    const skills = await getSkills(
      where as Prisma.SkillWhereInput,
      select as Prisma.SkillSelect,
      include as Prisma.SkillInclude,
      orderBy as Prisma.SkillOrderByWithAggregationInput,
      take as number
    );

    if (!skills) {
      return next(new AppError(404, "Skills not found"));
    }

    res.status(200).json({
      status: "success",
      skills,
    });
  } catch (error: any) {
    next(error);
  }
};

export const updateSkillHandler = async (
  req: Request<UpdateSkillInput["params"], {}, UpdateSkillInput["body"]>,
  res: Response,
  next: NextFunction
) => {
  try {
    const skill = await getSkill({ id: req.params.skillId });

    if (!skill) {
      return next(new AppError(404, "Skill with that ID not found"));
    }

    const updatedSkill = await updateSkill(
      { id: req.params.skillId },
      req.body
    );

    res.status(200).json({
      status: "success",
      updatedSkill,
    });
  } catch (err: any) {
    next(err);
  }
};

export const deleteSkillHandler = async (
  req: Request<DeleteSkillInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const skill = await getSkill({ id: req.params.skillId });

    if (!skill) {
      return next(new AppError(404, "Skill with that ID not found"));
    }

    await deleteSkill({ id: req.params.skillId });

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err: any) {
    next(err);
  }
};

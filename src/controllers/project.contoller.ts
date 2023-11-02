import { NextFunction, Request, Response } from "express";
import {
  CreateProjectInput,
  CreateTagInput,
  GetProjectInput,
  GetTagInput,
  UpdateProjectInput,
  UpdateTagInput,
} from "../schemas/project.schema";
import {
  createProject,
  createTag,
  deleteProject,
  deleteTag,
  getProject,
  getProjects,
  getTag,
  getTags,
  updateProject,
  updateTag,
} from "../services/project.service";
import AppError from "../utils/appError";
import {
  GenericObject,
  createObjectFromURLParamsAttributes,
} from "../utils/utilsFunctions";
import { Prisma } from "@prisma/client";

export const createProjectHandler = async (
  req: Request<{}, {}, CreateProjectInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const project = await createProject(req.body);

    res.status(201).json({
      status: "success",
      project,
    });
  } catch (error: any) {
    if (error.code === "P2002") {
      return res.status(409).json({
        status: "fail",
        message: "Project with that name already exist",
      });
    }
    next(error);
  }
};

export const getProjectHandler = async (
  req: Request<GetProjectInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { select, include } = createObjectFromURLParamsAttributes(
      req.query as GenericObject
    );

    const project = await getProject(
      { id: req.params.projectId },
      select as Prisma.ProjectSelect,
      include as Prisma.ProjectInclude
    );

    if (!project) {
      return new AppError(404, "Project not found");
    }

    res.status(200).json({
      status: "success",
      project,
    });
  } catch (error) {
    next(error);
  }
};

export const getProjectsHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { where, select, include, orderBy, take } =
      createObjectFromURLParamsAttributes(req.query as GenericObject);

    const projects = await getProjects(
      where as Prisma.ProjectWhereInput,
      select as Prisma.ProjectSelect,
      include as Prisma.ProjectInclude,
      orderBy as Prisma.ProjectOrderByWithAggregationInput,
      take as number
    );

    if (!projects) {
      return next(new AppError(404, "Projects not found"));
    }

    res.status(200).json({
      status: "success",
      projects,
    });
  } catch (error: any) {
    next(error);
  }
};

export const updateProjectHandler = async (
  req: Request<UpdateProjectInput["params"], {}, UpdateProjectInput["body"]>,
  res: Response,
  next: NextFunction
) => {
  try {
    const project = await getProject({ id: req.params.projectId });

    if (!project) {
      return next(new AppError(404, "Project not found"));
    }

    const updatedProject = await updateProject(
      { id: req.params.projectId },
      req.body
    );

    res.status(200).json({
      status: "success",
      updatedProject,
    });
  } catch (error: any) {
    next(error);
  }
};

export const deleteProjectHandler = async (
  req: Request<GetProjectInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const project = await getProject({ id: req.params.projectId });

    if (!project) {
      return next(new AppError(404, "Project not found"));
    }

    await deleteProject({ id: req.params.projectId });

    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (error: any) {
    next(error);
  }
};

export const createTagHandler = async (
  req: Request<{}, {}, CreateTagInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const tag = await createTag(req.body);

    res.status(201).json({
      status: "success",
      tag,
    });
  } catch (error: any) {
    if (error.code === "P2002") {
      return res.status(409).json({
        status: "fail",
        message: "Tag with that name already exist",
      });
    }
    next(error);
  }
};

export const getTagHandler = async (
  req: Request<GetTagInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { select, include } = createObjectFromURLParamsAttributes(
      req.query as GenericObject
    );

    const tag = await getTag(
      { id: req.params.tagId },
      select as Prisma.TagSelect,
      include as Prisma.TagInclude
    );

    if (!tag) {
      return new AppError(404, "Tag not found");
    }

    res.status(200).json({
      status: "success",
      tag,
    });
  } catch (error: any) {
    next(error);
  }
};

export const getTagsHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { where, select, include, orderBy, take } =
      createObjectFromURLParamsAttributes(req.query as GenericObject);

    const tags = await getTags(
      where as Prisma.TagWhereInput,
      select as Prisma.TagSelect,
      include as Prisma.TagInclude,
      orderBy as Prisma.TagOrderByWithAggregationInput,
      take as number
    );

    if (!tags) {
      return next(new AppError(404, "Tags not found"));
    }

    res.status(200).json({
      status: "success",
      tags,
    });
  } catch (error: any) {
    next(error);
  }
};

export const updateTagHandler = async (
  req: Request<UpdateTagInput["params"], {}, UpdateTagInput["body"]>,
  res: Response,
  next: NextFunction
) => {
  try {
    const tag = await getTag({ id: req.params.tagId });

    if (!tag) {
      return next(new AppError(404, "Tag not found"));
    }

    const updatedTag = await updateTag({ id: req.params.tagId }, req.body);

    res.status(200).json({
      status: "success",
      updatedTag,
    });
  } catch (error: any) {
    next(error);
  }
};

export const deleteTagHandler = async (
  req: Request<GetTagInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const tag = await getTag({ id: req.params.tagId });

    if (!tag) {
      return next(new AppError(404, "Tag not found"));
    }

    await deleteTag({ id: req.params.tagId });

    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (error: any) {
    next(error);
  }
};

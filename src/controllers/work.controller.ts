import { NextFunction, Request, Response } from "express";
import {
  CreateCompanyInput,
  CreateRoleInput,
  DeleteCompanyInput,
  DeleteRoleInput,
  GetCompanyInput,
  GetRoleInput,
  UpdateCompanyInput,
  UpdateRoleInput,
} from "../schemas/work.schema";
import {
  createCompany,
  createRole,
  deleteCompany,
  deleteRole,
  getCompanies,
  getCompany,
  getRole,
  getRoles,
  updateCompany,
  updateRole,
} from "../services/work.service";
import {
  GenericObject,
  createObjectFromURLParamsAttributes,
} from "../utils/utilsFunctions";
import { Prisma } from "@prisma/client";
import AppError from "../utils/appError";

export const createCompanyHandler = async (
  req: Request<{}, {}, CreateCompanyInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const company = await createCompany(req.body);

    res.status(201).json({
      status: "success",
      company,
    });
  } catch (error: any) {
    if (error.code === "P2002") {
      return res.status(409).json({
        status: "fail",
        message: "Company with that name already exist",
      });
    }

    next(error);
  }
};

export const getCompanyHandler = async (
  req: Request<GetCompanyInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { select, include } = createObjectFromURLParamsAttributes(
      req.query as GenericObject
    );

    const company = await getCompany(
      { id: req.params.companyId },
      select as Prisma.CompanySelect,
      include as Prisma.CompanyInclude
    );

    if (!company) {
      return next(new AppError(404, "Company not found"));
    }

    res.status(200).json({
      status: "success",
      company,
    });
  } catch (error: any) {
    next(error);
  }
};

export const getCompaniesHandler = async (
  req: Request<GetCompanyInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { where, select, include, orderBy, take } =
      createObjectFromURLParamsAttributes(req.query as GenericObject);

    const companies = await getCompanies(
      where as Prisma.CompanyWhereInput,
      select as Prisma.CompanySelect,
      include as Prisma.CompanyInclude,
      orderBy as Prisma.CompanyOrderByWithAggregationInput,
      take as number
    );

    if (!companies) {
      return next(new AppError(404, "Companies not found"));
    }

    res.status(200).json({
      status: "success",
      companies,
    });
  } catch (error: any) {
    next(error);
  }
};

export const updateCompanyHandler = async (
  req: Request<UpdateCompanyInput["params"], {}, UpdateCompanyInput["body"]>,
  res: Response,
  next: NextFunction
) => {
  try {
    const company = await getCompany({ id: req.params.companyId });

    if (!company) {
      return next(new AppError(404, "Company with that ID not found"));
    }

    const updatedCompany = await updateCompany(
      { id: req.params.companyId },
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

export const deleteCompanyHandler = async (
  req: Request<DeleteCompanyInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const company = await getCompany({ id: req.params.companyId });

    if (!company) {
      return next(new AppError(404, "Company with that ID not found"));
    }

    await deleteCompany({ id: req.params.companyId });

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err: any) {
    next(err);
  }
};

export const createRoleHandler = async (
  req: Request<{}, {}, CreateRoleInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const role = await createRole({
      ...req.body,
      company: req.body
        .company as Prisma.CompanyCreateNestedOneWithoutRolesInput,
    });

    res.status(201).json({
      status: "success",
      role,
    });
  } catch (error: any) {
    next(error);
  }
};

export const getRoleHandler = async (
  req: Request<GetRoleInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { select, include } = createObjectFromURLParamsAttributes(
      req.query as GenericObject
    );

    const role = await getRole(
      { id: req.params.roleId },
      select as Prisma.RoleSelect,
      include as Prisma.RoleInclude
    );

    if (!role) {
      return next(new AppError(404, "Role not found"));
    }

    res.status(200).json({
      status: "success",
      role,
    });
  } catch (error: any) {
    next(error);
  }
};

export const getRolesHandler = async (
  req: Request<GetRoleInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { where, select, include, orderBy, take } =
      createObjectFromURLParamsAttributes(req.query as GenericObject);

    const roles = await getRoles(
      where as Prisma.RoleWhereInput,
      select as Prisma.RoleSelect,
      include as Prisma.RoleInclude,
      orderBy as Prisma.RoleOrderByWithAggregationInput,
      take as number
    );

    if (!roles) {
      return next(new AppError(404, "Role not found"));
    }

    res.status(200).json({
      status: "success",
      roles,
    });
  } catch (error: any) {
    next(error);
  }
};

export const updateRoleHandler = async (
  req: Request<UpdateRoleInput["params"], {}, UpdateRoleInput["body"]>,
  res: Response,
  next: NextFunction
) => {
  try {
    const role = await getRole({ id: req.params.roleId });

    if (!role) {
      return next(new AppError(404, "Role with that ID not found"));
    }

    const updatedRole = await updateRole({ id: req.params.roleId }, req.body);

    res.status(200).json({
      status: "success",
      updatedRole,
    });
  } catch (err: any) {
    next(err);
  }
};

export const deleteRoleHandler = async (
  req: Request<DeleteRoleInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const role = await getCompany({ id: req.params.roleId });

    if (!role) {
      return next(new AppError(404, "Role with that ID not found"));
    }

    await deleteRole({ id: req.params.roleId });

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err: any) {
    next(err);
  }
};

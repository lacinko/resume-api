import { Company, Prisma, Role } from "@prisma/client";
import prisma from "../utils/connectPrisma";

export const createCompany = async (input: Prisma.CompanyCreateInput) => {
  return (await prisma.company.create({
    data: input,
  })) as Company;
};

export const getCompany = async (
  where: Prisma.CompanyWhereInput,
  select?: Prisma.CompanySelect,
  include?: Prisma.CompanyInclude
) => {
  return (await prisma.company.findFirst({
    where,
    ...(!select && include && { include }),
    ...(!include && select && { select }),
  })) as Company;
};

export const getCompanies = async (
  where?: Prisma.CompanyWhereInput,
  select?: Prisma.CompanySelect,
  include?: Prisma.CompanyInclude,
  orderBy?: Prisma.CompanyOrderByWithAggregationInput,
  take?: number
) => {
  return (await prisma.company.findMany({
    ...(where && { where }),
    ...(!select && include && { include }),
    ...(!include && select && { select }),
    ...(orderBy && { orderBy }),
    ...(take && { take }),
  })) as Company[];
};

export const updateCompany = async (
  where: Prisma.CompanyWhereUniqueInput,
  input: Prisma.CompanyUpdateInput,
  select?: Prisma.CompanySelect,
  include?: Prisma.CompanyInclude
) => {
  return (await prisma.company.update({
    where,
    data: input,
    ...(!select && include && { include }),
    ...(!include && select && { select }),
  })) as Company;
};

export const deleteCompany = async (
  where: Prisma.CompanyWhereUniqueInput,
  select?: Prisma.CompanySelect
) => {
  return await prisma.company.delete({
    where,
    select,
  });
};
export const createRole = async (input: Prisma.RoleCreateInput) => {
  return (await prisma.role.create({
    data: input,
  })) as Role;
};

export const getRole = async (
  where: Prisma.RoleWhereInput,
  select?: Prisma.RoleSelect,
  include?: Prisma.RoleInclude
) => {
  return (await prisma.role.findFirst({
    where,
    ...(!select && include && { include }),
    ...(!include && select && { select }),
  })) as Role;
};

export const getRoles = async (
  where?: Prisma.RoleWhereInput,
  select?: Prisma.RoleSelect,
  include?: Prisma.RoleInclude,
  orderBy?: Prisma.RoleOrderByWithAggregationInput,
  take?: number
) => {
  return (await prisma.role.findMany({
    ...(where && { where }),
    ...(!select && include && { include }),
    ...(!include && select && { select }),
    ...(orderBy && { orderBy }),
    ...(take && { take }),
  })) as Role[];
};

export const updateRole = async (
  where: Prisma.RoleWhereUniqueInput,
  input: Prisma.RoleUpdateInput,
  select?: Prisma.RoleSelect,
  include?: Prisma.RoleInclude
) => {
  return (await prisma.role.update({
    where,
    data: input,
    ...(!select && include && { include }),
    ...(!include && select && { select }),
  })) as Role;
};

export const deleteRole = async (
  where: Prisma.RoleWhereUniqueInput,
  select?: Prisma.RoleSelect
) => {
  return await prisma.role.delete({
    where,
    select,
  });
};

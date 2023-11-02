import { Prisma, Project, Tag } from "@prisma/client";
import prisma from "../utils/connectPrisma";

export const createProject = async (input: Prisma.ProjectCreateInput) => {
  return (await prisma.project.create({
    data: input,
  })) as Project;
};

export const getProject = async (
  where: Prisma.ProjectWhereInput,
  select?: Prisma.ProjectSelect,
  include?: Prisma.ProjectInclude
) => {
  return (await prisma.project.findFirst({
    where,
    ...(!select && include && { include }),
    ...(!include && select && { select }),
  })) as Project;
};

export const getProjects = async (
  where?: Prisma.ProjectWhereInput,
  select?: Prisma.ProjectSelect,
  include?: Prisma.ProjectInclude,
  orderBy?: Prisma.ProjectOrderByWithAggregationInput,
  take?: number
) => {
  return (await prisma.project.findMany({
    ...(where && { where }),
    ...(!select && include && { include }),
    ...(!include && select && { select }),
    ...(orderBy && { orderBy }),
    ...(take && { take }),
  })) as Project[];
};

export const updateProject = async (
  where: Prisma.ProjectWhereUniqueInput,
  input: Prisma.ProjectUpdateInput,
  select?: Prisma.ProjectSelect,
  include?: Prisma.ProjectInclude
) => {
  return (await prisma.project.update({
    where,
    data: input,
    ...(!select && include && { include }),
    ...(!include && select && { select }),
  })) as Project;
};

export const deleteProject = async (
  where: Prisma.ProjectWhereUniqueInput,
  select?: Prisma.ProjectSelect
) => {
  return await prisma.project.delete({
    where,
    select,
  });
};

export const createTag = async (input: Prisma.TagCreateInput) => {
  return (await prisma.tag.create({
    data: input,
  })) as Tag;
};

export const getTag = async (
  where: Prisma.TagWhereInput,
  select?: Prisma.TagSelect,
  include?: Prisma.TagInclude
) => {
  return (await prisma.tag.findFirst({
    where,
    ...(!select && include && { include }),
    ...(!include && select && { select }),
  })) as Tag;
};

export const getTags = async (
  where: Prisma.TagWhereInput,
  select?: Prisma.TagSelect,
  include?: Prisma.TagInclude,
  orderBy?: Prisma.TagOrderByWithAggregationInput,
  take?: number
) => {
  return (await prisma.tag.findMany({
    ...(where && { where }),
    ...(!select && include && { include }),
    ...(!include && select && { select }),
    ...(orderBy && { orderBy }),
    ...(take && { take }),
  })) as Tag[];
};

export const updateTag = async (
  where: Prisma.TagWhereUniqueInput,
  input: Prisma.TagUpdateInput,
  select?: Prisma.TagSelect,
  include?: Prisma.TagInclude
) => {
  return (await prisma.tag.update({
    where,
    data: input,
    ...(!select && include && { include }),
    ...(!include && select && { select }),
  })) as Tag;
};

export const deleteTag = async (
  where: Prisma.TagWhereUniqueInput,
  select?: Prisma.TagSelect
) => {
  return await prisma.tag.delete({
    where,
    select,
  });
};

import { Prisma, Skill } from "@prisma/client";
import prisma from "../utils/connectPrisma";

export const createSkill = async (input: Prisma.SkillCreateInput) => {
  return (await prisma.skill.create({
    data: input,
  })) as Skill;
};

export const getSkill = async (
  where: Prisma.SkillWhereInput,
  select?: Prisma.SkillSelect,
  include?: Prisma.SkillInclude
) => {
  return (await prisma.skill.findFirst({
    where,
    ...(!select && include && { include }),
    ...(!include && select && { select }),
  })) as Skill;
};

export const getSkills = async (
  where?: Prisma.SkillWhereInput,
  select?: Prisma.SkillSelect,
  include?: Prisma.SkillInclude,
  orderBy?: Prisma.SkillOrderByWithAggregationInput,
  take?: number
) => {
  return (await prisma.skill.findMany({
    ...(where && { where }),
    ...(!select && include && { include }),
    ...(!include && select && { select }),
    ...(orderBy && { orderBy }),
    ...(take && { take }),
  })) as Skill[];
};

export const updateSkill = async (
  where: Prisma.SkillWhereUniqueInput,
  input: Prisma.SkillUpdateInput,
  select?: Prisma.SkillSelect,
  include?: Prisma.SkillInclude
) => {
  return (await prisma.skill.update({
    where,
    data: input,
    ...(!select && include && { include }),
    ...(!include && select && { select }),
  })) as Skill;
};

export const deleteSkill = async (
  where: Prisma.SkillWhereUniqueInput,
  select?: Prisma.SkillSelect
) => {
  return await prisma.skill.delete({
    where,
    select,
  });
};

import { Education, Establishment, Prisma } from "@prisma/client";
import prisma from "../utils/connectPrisma";

export const createEducation = async (input: Prisma.EducationCreateInput) => {
  return (await prisma.education.create({
    data: input,
  })) as Education;
};

export const getEducation = async (
  where: Prisma.EducationWhereUniqueInput,
  select?: Prisma.EducationSelect,
  include?: Prisma.EducationInclude
) => {
  return (await prisma.education.findFirst({
    where,
    ...(!select && include && { include }),
    ...(!include && select && { select }),
  })) as Education;
};

export const getEducations = async (
  where: Prisma.EducationWhereInput,
  select?: Prisma.EducationSelect,
  include?: Prisma.EducationInclude,
  orderBy?: Prisma.EducationOrderByWithAggregationInput,
  take?: number
) => {
  return (await prisma.education.findMany({
    ...(where && { where }),
    ...(!select && include && { include }),
    ...(!include && select && { select }),
    ...(orderBy && { orderBy }),
    ...(take && { take }),
  })) as Education[];
};

export const updateEducation = async (
  where: Prisma.EducationWhereUniqueInput,
  input: Prisma.EducationUpdateInput,
  select?: Prisma.EducationSelect,
  include?: Prisma.EducationInclude
) => {
  return (await prisma.education.update({
    where,
    data: input,
    ...(!select && include && { include }),
    ...(!include && select && { select }),
  })) as Education;
};

export const deleteEducation = async (
  where: Prisma.EducationWhereUniqueInput,
  select?: Prisma.EducationSelect
) => {
  return (await prisma.education.delete({
    where,
    select,
  })) as Education;
};

export const createEstablishment = async (
  input: Prisma.EstablishmentCreateInput
) => {
  return (await prisma.establishment.create({
    data: input,
  })) as Establishment;
};

export const getEstablishment = async (
  where: Prisma.EstablishmentWhereUniqueInput,
  select?: Prisma.EstablishmentSelect,
  include?: Prisma.EstablishmentInclude
) => {
  return (await prisma.establishment.findFirst({
    where,
    ...(!select && include && { include }),
    ...(!include && select && { select }),
  })) as Establishment;
};

export const getEstablishments = async (
  where: Prisma.EstablishmentWhereInput,
  select?: Prisma.EstablishmentSelect,
  include?: Prisma.EstablishmentInclude,
  orderBy?: Prisma.EstablishmentOrderByWithAggregationInput,
  take?: number
) => {
  return (await prisma.establishment.findMany({
    ...(where && { where }),
    ...(!select && include && { include }),
    ...(!include && select && { select }),
    ...(orderBy && { orderBy }),
    ...(take && { take }),
  })) as Establishment[];
};

export const updateEstablishment = async (
  where: Prisma.EstablishmentWhereUniqueInput,
  input: Prisma.EstablishmentUpdateInput,
  select?: Prisma.EstablishmentSelect,
  include?: Prisma.EstablishmentInclude
) => {
  return (await prisma.establishment.update({
    where,
    data: input,
    ...(!select && include && { include }),
    ...(!include && select && { select }),
  })) as Establishment;
};

export const deleteEstablishment = async (
  where: Prisma.EstablishmentWhereUniqueInput,
  select?: Prisma.EstablishmentSelect
) => {
  return (await prisma.establishment.delete({
    where,
    select,
  })) as Establishment;
};

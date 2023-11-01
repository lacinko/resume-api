import { object, string, TypeOf } from "zod";

export const createSkillSchema = object({
  body: object({
    icon: string().min(1, "Icon can' be empty").max(40, "Icon is too long"),
    name: string()
      .min(1, "Figcaption can't be empty")
      .max(40, "Figcaption is too long"),
  }),
});

export const skillParams = {
  params: object({
    skillId: string(),
  }),
};

export const getSkillSchema = object({
  ...skillParams,
});

export const updateSkillSchema = object({
  ...skillParams,
  body: createSkillSchema.shape.body.partial(),
});

export const deleteSkillSchema = object({
  ...skillParams,
});

export type CreateSkillInput = TypeOf<typeof createSkillSchema>["body"];
export type GetSkillInput = TypeOf<typeof getSkillSchema>["params"];
export type UpdateSkillInput = TypeOf<typeof updateSkillSchema>;
export type DeleteSkillInput = TypeOf<typeof deleteSkillSchema>["params"];

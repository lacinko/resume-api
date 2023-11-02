import { TypeOf, array, object, string } from "zod";

export const createProjectSchema = object({
  body: object({
    name: string().min(1, "Name can' be empty").max(40, "Name is too long"),
    description: string()
      .min(1, "Description can' be empty")
      .max(500, "Description is too long"),
    url: string().url("Invalid url").optional(),
    githubUrl: string().url("Invalid url"),
    tags: object({
      connect: array(object({ id: string() })),
    }).optional(),
  }),
});

export const projectParams = {
  params: object({
    projectId: string(),
  }),
};

export const getProjectSchema = object({
  ...projectParams,
});

export const updateProjectSchema = object({
  ...projectParams,
  body: createProjectSchema.shape.body.partial(),
});

export const deleteProjectSchema = object({
  ...projectParams,
});

export const createTagSchema = object({
  body: object({
    name: string().min(1, "Name can' be empty").max(40, "Name is too long"),
    color: string().min(1, "Color can' be empty").max(40, "Color is too long"),
    projects: object({
      connect: array(object({ id: string() })),
    }).optional(),
  }),
});

export const tagParams = {
  params: object({
    tagId: string(),
  }),
};

export const getTagSchema = object({
  ...tagParams,
});

export const updateTagSchema = object({
  ...tagParams,
  body: createTagSchema.shape.body.partial(),
});

export const deleteTagSchema = object({
  ...tagParams,
});

export type CreateProjectInput = TypeOf<typeof createProjectSchema>["body"];
export type GetProjectInput = TypeOf<typeof getProjectSchema>["params"];
export type UpdateProjectInput = TypeOf<typeof updateProjectSchema>;
export type DeleteProjectInput = TypeOf<typeof deleteProjectSchema>["params"];

export type CreateTagInput = TypeOf<typeof createTagSchema>["body"];
export type GetTagInput = TypeOf<typeof getTagSchema>["params"];
export type UpdateTagInput = TypeOf<typeof updateTagSchema>;
export type DeleteTagInput = TypeOf<typeof deleteTagSchema>["params"];

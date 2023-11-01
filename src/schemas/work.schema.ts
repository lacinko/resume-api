import { object, string, number, boolean, TypeOf, array } from "zod";

export const createCompanySchema = object({
  body: object({
    name: string().min(3, "Name is too short").max(40, "Name is too long"),
    location: string()
      .min(3, "Location is too short")
      .max(40, "Location is too long"),
    website: string().url({ message: "Invalid url" }),
    logo: string().url({ message: "Invalid url" }),
    size: string().min(1, "Size is too short").max(40, "Size is too long"),
    industry: string()
      .min(3, "Industry is too short")
      .max(40, "Industry is too long"),
    address: string()
      .min(3, "Address is too short")
      .max(100, "Address is too long"),
    about: string().min(3, "About is too short").max(1000, "About is too long"),
  }),
});

export const companyParams = {
  params: object({
    companyId: string(),
  }),
};

export const getCompanySchema = object({
  ...companyParams,
});

export const updateCompanySchema = object({
  ...companyParams,
  body: createCompanySchema.shape.body.partial(),
});

export const deleteCompanySchema = object({
  ...companyParams,
});

export const createRoleSchema = object({
  body: object({
    title: string().min(3, "Title is too short").max(40, "Title is too long"),
    description: string()
      .min(3, "Description is too short")
      .max(2000, "Description is too long"),
    location: string()
      .min(3, "Location is too short")
      .max(40, "Location is too long"),
    isCurrent: boolean().optional(),
    startDate: string().datetime(),
    endDate: string().datetime().optional(),
    company: object({
      connect: object({
        id: string(),
      }),
    }).optional(),
  }),
  skills: object({
    connect: object({
      id: array(object({ id: string() })),
    }),
  }).optional(),
});

export const roleParams = {
  params: object({
    roleId: string(),
  }),
};

export const getRoleSchema = object({
  ...roleParams,
});

export const updateRoleSchema = object({
  ...roleParams,
  body: createRoleSchema.shape.body.partial(),
});

export const deleteRoleSchema = object({
  ...roleParams,
});

export type CreateCompanyInput = TypeOf<typeof createCompanySchema>["body"];
export type GetCompanyInput = TypeOf<typeof getCompanySchema>["params"];
export type UpdateCompanyInput = TypeOf<typeof updateCompanySchema>;
export type DeleteCompanyInput = TypeOf<typeof deleteCompanySchema>["params"];

export type CreateRoleInput = TypeOf<typeof createRoleSchema>["body"];
export type GetRoleInput = TypeOf<typeof getRoleSchema>["params"];
export type UpdateRoleInput = TypeOf<typeof updateRoleSchema>;
export type DeleteRoleInput = TypeOf<typeof deleteRoleSchema>["params"];

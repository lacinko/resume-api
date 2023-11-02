import { TypeOf, object, string, z } from "zod";

export const createEducationSchema = object({
  body: object({
    title: string()
      .min(1, "Title cannot be empty")
      .max(50, "Title cannot be longer than 50 characters"),
    type: z.enum(["SCHOOL", "COURSE"]),
    startDate: string().datetime({ message: "Invalid date" }),
    endDate: string().datetime({ message: "Invalid date" }).optional(),
    certificate: string().url({ message: "Invalid url" }).optional(),
    establishment: object({
      connect: object({
        id: string(),
      }),
    }),
  }),
});

export const educationParamsSchema = {
  params: object({
    educationId: string(),
  }),
};

export const getEducationSchema = object({
  ...educationParamsSchema,
});

export const updateEducationSchema = object({
  ...educationParamsSchema,
  body: createEducationSchema.shape.body.partial(),
});

export const deleteEducationSchema = object({
  ...educationParamsSchema,
});

export const createEstablishmentSchema = object({
  body: object({
    name: string()
      .min(1, "Name cannot be empty")
      .max(50, "Name cannot be longer than 50 characters"),
    location: string()
      .min(1, "Location cannot be empty")
      .max(50, "Location cannot be longer than 50 characters"),
    website: string().url({ message: "Invalid url" }),
  }),
});

export const establishmentParamsSchema = {
  params: object({
    establishmentId: string(),
  }),
};

export const getEstablishmentSchema = object({
  ...establishmentParamsSchema,
});

export const updateEstablishmentSchema = object({
  ...establishmentParamsSchema,
  body: createEstablishmentSchema.shape.body.partial(),
});

export const deleteEstablishmentSchema = object({
  ...establishmentParamsSchema,
});

export type CreateEducationInput = TypeOf<typeof createEducationSchema>["body"];
export type GetEducationInput = TypeOf<typeof getEducationSchema>["params"];
export type UpdateEducationInput = TypeOf<typeof updateEducationSchema>;
export type DeleteEducationInput = TypeOf<
  typeof deleteEducationSchema
>["params"];

export type CreateEstablishmentInput = TypeOf<
  typeof createEstablishmentSchema
>["body"];
export type GetEstablishmentInput = TypeOf<
  typeof getEstablishmentSchema
>["params"];
export type UpdateEstablishmentInput = TypeOf<typeof updateEstablishmentSchema>;
export type DeleteEstablishmentInput = TypeOf<
  typeof deleteEstablishmentSchema
>["params"];

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEstablishmentSchema = exports.updateEstablishmentSchema = exports.getEstablishmentSchema = exports.establishmentParamsSchema = exports.createEstablishmentSchema = exports.deleteEducationSchema = exports.updateEducationSchema = exports.getEducationSchema = exports.educationParamsSchema = exports.createEducationSchema = void 0;
const zod_1 = require("zod");
exports.createEducationSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        title: (0, zod_1.string)()
            .min(1, "Title cannot be empty")
            .max(50, "Title cannot be longer than 50 characters"),
        type: zod_1.z.enum(["SCHOOL", "COURSE"]),
        startDate: (0, zod_1.string)().datetime({ message: "Invalid date" }),
        endDate: (0, zod_1.string)().datetime({ message: "Invalid date" }).optional(),
        certificate: (0, zod_1.string)().url({ message: "Invalid url" }).optional(),
        establishment: (0, zod_1.object)({
            connect: (0, zod_1.object)({
                id: (0, zod_1.string)(),
            }),
        }),
    }),
});
exports.educationParamsSchema = {
    params: (0, zod_1.object)({
        educationId: (0, zod_1.string)(),
    }),
};
exports.getEducationSchema = (0, zod_1.object)(Object.assign({}, exports.educationParamsSchema));
exports.updateEducationSchema = (0, zod_1.object)(Object.assign(Object.assign({}, exports.educationParamsSchema), { body: exports.createEducationSchema.shape.body.partial() }));
exports.deleteEducationSchema = (0, zod_1.object)(Object.assign({}, exports.educationParamsSchema));
exports.createEstablishmentSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        name: (0, zod_1.string)()
            .min(1, "Name cannot be empty")
            .max(50, "Name cannot be longer than 50 characters"),
        location: (0, zod_1.string)()
            .min(1, "Location cannot be empty")
            .max(50, "Location cannot be longer than 50 characters"),
        website: (0, zod_1.string)().url({ message: "Invalid url" }),
    }),
});
exports.establishmentParamsSchema = {
    params: (0, zod_1.object)({
        establishmentId: (0, zod_1.string)(),
    }),
};
exports.getEstablishmentSchema = (0, zod_1.object)(Object.assign({}, exports.establishmentParamsSchema));
exports.updateEstablishmentSchema = (0, zod_1.object)(Object.assign(Object.assign({}, exports.establishmentParamsSchema), { body: exports.createEstablishmentSchema.shape.body.partial() }));
exports.deleteEstablishmentSchema = (0, zod_1.object)(Object.assign({}, exports.establishmentParamsSchema));

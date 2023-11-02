"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRoleSchema = exports.updateRoleSchema = exports.getRoleSchema = exports.roleParams = exports.createRoleSchema = exports.deleteCompanySchema = exports.updateCompanySchema = exports.getCompanySchema = exports.companyParams = exports.createCompanySchema = void 0;
const zod_1 = require("zod");
exports.createCompanySchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        name: (0, zod_1.string)().min(3, "Name is too short").max(40, "Name is too long"),
        location: (0, zod_1.string)()
            .min(3, "Location is too short")
            .max(40, "Location is too long"),
        website: (0, zod_1.string)().url({ message: "Invalid url" }),
        logo: (0, zod_1.string)().url({ message: "Invalid url" }),
        size: (0, zod_1.string)().min(1, "Size is too short").max(40, "Size is too long"),
        industry: (0, zod_1.string)()
            .min(3, "Industry is too short")
            .max(40, "Industry is too long"),
        address: (0, zod_1.string)()
            .min(3, "Address is too short")
            .max(100, "Address is too long"),
        about: (0, zod_1.string)().min(3, "About is too short").max(1000, "About is too long"),
    }),
});
exports.companyParams = {
    params: (0, zod_1.object)({
        companyId: (0, zod_1.string)(),
    }),
};
exports.getCompanySchema = (0, zod_1.object)(Object.assign({}, exports.companyParams));
exports.updateCompanySchema = (0, zod_1.object)(Object.assign(Object.assign({}, exports.companyParams), { body: exports.createCompanySchema.shape.body.partial() }));
exports.deleteCompanySchema = (0, zod_1.object)(Object.assign({}, exports.companyParams));
exports.createRoleSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        title: (0, zod_1.string)().min(3, "Title is too short").max(40, "Title is too long"),
        description: (0, zod_1.string)()
            .min(3, "Description is too short")
            .max(2000, "Description is too long"),
        location: (0, zod_1.string)()
            .min(3, "Location is too short")
            .max(40, "Location is too long"),
        isCurrent: (0, zod_1.boolean)().optional(),
        startDate: (0, zod_1.string)().datetime(),
        endDate: (0, zod_1.string)().datetime().optional(),
        company: (0, zod_1.object)({
            connect: (0, zod_1.object)({
                id: (0, zod_1.string)(),
            }),
        }).optional(),
    }),
    skills: (0, zod_1.object)({
        connect: (0, zod_1.object)({
            id: (0, zod_1.array)((0, zod_1.object)({ id: (0, zod_1.string)() })),
        }),
    }).optional(),
});
exports.roleParams = {
    params: (0, zod_1.object)({
        roleId: (0, zod_1.string)(),
    }),
};
exports.getRoleSchema = (0, zod_1.object)(Object.assign({}, exports.roleParams));
exports.updateRoleSchema = (0, zod_1.object)(Object.assign(Object.assign({}, exports.roleParams), { body: exports.createRoleSchema.shape.body.partial() }));
exports.deleteRoleSchema = (0, zod_1.object)(Object.assign({}, exports.roleParams));

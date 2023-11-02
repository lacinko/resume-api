"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTagSchema = exports.updateTagSchema = exports.getTagSchema = exports.tagParams = exports.createTagSchema = exports.deleteProjectSchema = exports.updateProjectSchema = exports.getProjectSchema = exports.projectParams = exports.createProjectSchema = void 0;
const zod_1 = require("zod");
exports.createProjectSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        name: (0, zod_1.string)().min(1, "Name can' be empty").max(40, "Name is too long"),
        description: (0, zod_1.string)()
            .min(1, "Description can' be empty")
            .max(500, "Description is too long"),
        url: (0, zod_1.string)().url("Invalid url").optional(),
        githubUrl: (0, zod_1.string)().url("Invalid url"),
        tags: (0, zod_1.object)({
            connect: (0, zod_1.array)((0, zod_1.object)({ id: (0, zod_1.string)() })),
        }).optional(),
    }),
});
exports.projectParams = {
    params: (0, zod_1.object)({
        projectId: (0, zod_1.string)(),
    }),
};
exports.getProjectSchema = (0, zod_1.object)(Object.assign({}, exports.projectParams));
exports.updateProjectSchema = (0, zod_1.object)(Object.assign(Object.assign({}, exports.projectParams), { body: exports.createProjectSchema.shape.body.partial() }));
exports.deleteProjectSchema = (0, zod_1.object)(Object.assign({}, exports.projectParams));
exports.createTagSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        name: (0, zod_1.string)().min(1, "Name can' be empty").max(40, "Name is too long"),
        color: (0, zod_1.string)().min(1, "Color can' be empty").max(40, "Color is too long"),
        projects: (0, zod_1.object)({
            connect: (0, zod_1.array)((0, zod_1.object)({ id: (0, zod_1.string)() })),
        }).optional(),
    }),
});
exports.tagParams = {
    params: (0, zod_1.object)({
        tagId: (0, zod_1.string)(),
    }),
};
exports.getTagSchema = (0, zod_1.object)(Object.assign({}, exports.tagParams));
exports.updateTagSchema = (0, zod_1.object)(Object.assign(Object.assign({}, exports.tagParams), { body: exports.createTagSchema.shape.body.partial() }));
exports.deleteTagSchema = (0, zod_1.object)(Object.assign({}, exports.tagParams));

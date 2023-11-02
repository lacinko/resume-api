"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSkillSchema = exports.updateSkillSchema = exports.getSkillSchema = exports.skillParams = exports.createSkillSchema = void 0;
const zod_1 = require("zod");
exports.createSkillSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        icon: (0, zod_1.string)()
            .min(1, "Icon can' be empty")
            .max(40, "Icon is too long")
            .optional(),
        name: (0, zod_1.string)()
            .min(1, "Figcaption can't be empty")
            .max(40, "Figcaption is too long"),
        type: zod_1.z.enum(["HARD_SKILL", "SOFT_SKILL"]),
    }),
});
exports.skillParams = {
    params: (0, zod_1.object)({
        skillId: (0, zod_1.string)(),
    }),
};
exports.getSkillSchema = (0, zod_1.object)(Object.assign({}, exports.skillParams));
exports.updateSkillSchema = (0, zod_1.object)(Object.assign(Object.assign({}, exports.skillParams), { body: exports.createSkillSchema.shape.body.partial() }));
exports.deleteSkillSchema = (0, zod_1.object)(Object.assign({}, exports.skillParams));

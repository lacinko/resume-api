"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEstablishmentHandler = exports.updateEstablishmentHandler = exports.getEstablishmentsHandler = exports.getEstablishmentHandler = exports.createEstablishmentHandler = exports.deleteEducationHandler = exports.updateEducationHandler = exports.getEducationsHandler = exports.getEducationHandler = exports.createEducationHandler = void 0;
const education_service_1 = require("../services/education.service");
const appError_1 = __importDefault(require("../utils/appError"));
const utilsFunctions_1 = require("../utils/utilsFunctions");
const createEducationHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const education = yield (0, education_service_1.createEducation)(req.body);
        res.status(201).json({
            status: "success",
            education,
        });
    }
    catch (error) {
        if (error.code === "P2002") {
            return res.status(409).json({
                status: "fail",
                message: "Education with that name already exist",
            });
        }
        next(error);
    }
});
exports.createEducationHandler = createEducationHandler;
const getEducationHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { select } = (0, utilsFunctions_1.createObjectFromURLParamsAttributes)(req.query);
        const education = yield (0, education_service_1.getEducation)({ id: req.params.educationId }, select);
        if (!education) {
            throw new appError_1.default(404, "Education not found");
        }
        res.status(200).json({
            status: "success",
            education,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getEducationHandler = getEducationHandler;
const getEducationsHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { where, select, include, orderBy, take } = (0, utilsFunctions_1.createObjectFromURLParamsAttributes)(req.query);
        const educations = yield (0, education_service_1.getEducations)(where, select, include, orderBy, take);
        if (!educations) {
            return next(new appError_1.default(404, "Educations not found"));
        }
        res.status(200).json({
            status: "success",
            educations,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getEducationsHandler = getEducationsHandler;
const updateEducationHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const education = yield (0, education_service_1.getEducation)({ id: req.params.educationId });
        if (!education) {
            return next(new appError_1.default(404, "Education with that ID not found"));
        }
        const updatedCompany = yield (0, education_service_1.updateEducation)({ id: req.params.educationId }, req.body);
        res.status(200).json({
            status: "success",
            updatedCompany,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateEducationHandler = updateEducationHandler;
const deleteEducationHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const education = yield (0, education_service_1.getEducation)({ id: req.params.educationId });
        if (!education) {
            return next(new appError_1.default(404, "Education with that ID not found"));
        }
        yield (0, education_service_1.deleteEducation)({ id: req.params.educationId });
        res.status(204).json({
            status: "success",
            data: null,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteEducationHandler = deleteEducationHandler;
const createEstablishmentHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const establishment = yield (0, education_service_1.createEstablishment)(req.body);
        res.status(201).json({
            status: "success",
            establishment,
        });
    }
    catch (error) {
        if (error.code === "P2002") {
            return res.status(409).json({
                status: "fail",
                message: "Establishment with that name already exist",
            });
        }
        next(error);
    }
});
exports.createEstablishmentHandler = createEstablishmentHandler;
const getEstablishmentHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { select, include } = (0, utilsFunctions_1.createObjectFromURLParamsAttributes)(req.query);
        const establishment = yield (0, education_service_1.getEstablishment)({ id: req.params.establishmentId }, select, include);
        if (!establishment) {
            throw new appError_1.default(404, "Establishment not found");
        }
        res.status(200).json({
            status: "success",
            establishment,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getEstablishmentHandler = getEstablishmentHandler;
const getEstablishmentsHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { where, select, include, orderBy, take } = (0, utilsFunctions_1.createObjectFromURLParamsAttributes)(req.query);
        const establishments = yield (0, education_service_1.getEstablishments)(where, select, include, orderBy, take);
        if (!establishments) {
            return next(new appError_1.default(404, "Establishments not found"));
        }
        res.status(200).json({
            status: "success",
            establishments,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getEstablishmentsHandler = getEstablishmentsHandler;
const updateEstablishmentHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const establishment = yield (0, education_service_1.getEstablishment)({
            id: req.params.establishmentId,
        });
        if (!establishment) {
            return next(new appError_1.default(404, "Establishment with that ID not found"));
        }
        const updatedEstablishment = yield (0, education_service_1.updateEstablishment)({ id: req.params.establishmentId }, req.body);
        res.status(200).json({
            status: "success",
            updatedEstablishment,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateEstablishmentHandler = updateEstablishmentHandler;
const deleteEstablishmentHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const establishment = yield (0, education_service_1.getEstablishment)({
            id: req.params.establishmentId,
        });
        if (!establishment) {
            return next(new appError_1.default(404, "Establishment with that ID not found"));
        }
        yield (0, education_service_1.deleteEstablishment)({ id: req.params.establishmentId });
        res.status(204).json({
            status: "success",
            data: null,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteEstablishmentHandler = deleteEstablishmentHandler;

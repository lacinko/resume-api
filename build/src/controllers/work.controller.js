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
exports.deleteRoleHandler = exports.updateRoleHandler = exports.getRolesHandler = exports.getRoleHandler = exports.createRoleHandler = exports.deleteCompanyHandler = exports.updateCompanyHandler = exports.getCompaniesHandler = exports.getCompanyHandler = exports.createCompanyHandler = void 0;
const work_service_1 = require("../services/work.service");
const utilsFunctions_1 = require("../utils/utilsFunctions");
const appError_1 = __importDefault(require("../utils/appError"));
const createCompanyHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const company = yield (0, work_service_1.createCompany)(req.body);
        res.status(201).json({
            status: "success",
            company,
        });
    }
    catch (error) {
        if (error.code === "P2002") {
            return res.status(409).json({
                status: "fail",
                message: "Company with that name already exist",
            });
        }
        next(error);
    }
});
exports.createCompanyHandler = createCompanyHandler;
const getCompanyHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { select, include } = (0, utilsFunctions_1.createObjectFromURLParamsAttributes)(req.query);
        const company = yield (0, work_service_1.getCompany)({ id: req.params.companyId }, select, include);
        if (!company) {
            return next(new appError_1.default(404, "Company not found"));
        }
        res.status(200).json({
            status: "success",
            company,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getCompanyHandler = getCompanyHandler;
const getCompaniesHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { where, select, include, orderBy, take } = (0, utilsFunctions_1.createObjectFromURLParamsAttributes)(req.query);
        const companies = yield (0, work_service_1.getCompanies)(where, select, include, orderBy, take);
        if (!companies) {
            return next(new appError_1.default(404, "Companies not found"));
        }
        res.status(200).json({
            status: "success",
            companies,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getCompaniesHandler = getCompaniesHandler;
const updateCompanyHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const company = yield (0, work_service_1.getCompany)({ id: req.params.companyId });
        if (!company) {
            return next(new appError_1.default(404, "Company with that ID not found"));
        }
        const updatedCompany = yield (0, work_service_1.updateCompany)({ id: req.params.companyId }, req.body);
        res.status(200).json({
            status: "success",
            updatedCompany,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateCompanyHandler = updateCompanyHandler;
const deleteCompanyHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const company = yield (0, work_service_1.getCompany)({ id: req.params.companyId });
        if (!company) {
            return next(new appError_1.default(404, "Company with that ID not found"));
        }
        yield (0, work_service_1.deleteCompany)({ id: req.params.companyId });
        res.status(204).json({
            status: "success",
            data: null,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteCompanyHandler = deleteCompanyHandler;
const createRoleHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const role = yield (0, work_service_1.createRole)(Object.assign(Object.assign({}, req.body), { company: req.body
                .company }));
        res.status(201).json({
            status: "success",
            role,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.createRoleHandler = createRoleHandler;
const getRoleHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { select, include } = (0, utilsFunctions_1.createObjectFromURLParamsAttributes)(req.query);
        const role = yield (0, work_service_1.getRole)({ id: req.params.roleId }, select, include);
        if (!role) {
            return next(new appError_1.default(404, "Role not found"));
        }
        res.status(200).json({
            status: "success",
            role,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getRoleHandler = getRoleHandler;
const getRolesHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { where, select, include, orderBy, take } = (0, utilsFunctions_1.createObjectFromURLParamsAttributes)(req.query);
        const roles = yield (0, work_service_1.getRoles)(where, select, include, orderBy, take);
        if (!roles) {
            return next(new appError_1.default(404, "Role not found"));
        }
        res.status(200).json({
            status: "success",
            roles,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getRolesHandler = getRolesHandler;
const updateRoleHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const role = yield (0, work_service_1.getRole)({ id: req.params.roleId });
        if (!role) {
            return next(new appError_1.default(404, "Role with that ID not found"));
        }
        const updatedRole = yield (0, work_service_1.updateRole)({ id: req.params.roleId }, req.body);
        res.status(200).json({
            status: "success",
            updatedRole,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateRoleHandler = updateRoleHandler;
const deleteRoleHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const role = yield (0, work_service_1.getCompany)({ id: req.params.roleId });
        if (!role) {
            return next(new appError_1.default(404, "Role with that ID not found"));
        }
        yield (0, work_service_1.deleteRole)({ id: req.params.roleId });
        res.status(204).json({
            status: "success",
            data: null,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteRoleHandler = deleteRoleHandler;

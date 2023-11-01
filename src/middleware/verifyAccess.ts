import { NextFunction, Request, Response } from "express";
import AppError from "../utils/appError";
import config from "config";

export const verifyAccess = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let access_token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      access_token = req.headers.authorization.split(" ")[1];
    } else if (req.cookies.access_token) {
      access_token = req.cookies.access_token;
    }

    if (!access_token) {
      return next(new AppError(401, "You are not logged in"));
    }

    // Validate the access token
    const decoded = access_token === config.get("accessToken");

    if (!decoded) {
      return next(new AppError(401, `Invalid token or user doesn't exist`));
    }

    next();
  } catch (err: any) {
    next(err);
  }
};

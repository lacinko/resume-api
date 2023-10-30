require("dotenv").config();
import express, { NextFunction, Request, Response } from "express";
import config from "config";
import validateEnv from "./utils/validateEnv";
import prisma from "./utils/connectPrisma";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import AppError from "./utils/appError";
import helmet from "helmet";
import rateLimitMiddleware from "./middleware/rateLimiter";

validateEnv();

const app = express();

async function bootstrap() {
  // MIDDLEWARE
  // 1.Body Parser
  app.use(express.json({ limit: "10kb" }));

  // 2. Cookie Parser
  app.use(cookieParser());

  // 2. Cors
  app.use(
    cors({
      origin: [config.get<string>("origin")],
      credentials: true,
    })
  );

  // 3. Logger
  if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

  // 4. Default Headers
  app.use(helmet());

  //5. Rate Limiter
  app.use(rateLimitMiddleware);

  // Testing
  app.get("/api/healthchecker", async (_, res: Response) => {
    const message = {
      message: "Server is running",
      database: "Connected",
    };

    res.status(200).json({
      status: "success",
      message,
    });
  });

  // UNHANDLED ROUTES
  app.all("*", (req: Request, res: Response, next: NextFunction) => {
    next(new AppError(404, `Route ${req.originalUrl} not found`));
  });

  // GLOBAL ERROR HANDLER
  app.use((err: AppError, req: Request, res: Response, next: NextFunction) => {
    err.status = err.status || "error";
    err.statusCode = err.statusCode || 500;

    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  });

  const port = config.get<number>("port");
  app.listen(port, () => {
    console.log(`Server on port: ${port}`);
  });
}

bootstrap()
  .catch((err) => {
    throw err;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

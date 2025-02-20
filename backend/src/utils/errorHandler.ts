import { HttpStatusCode } from "../enums/httpStatus";

export type ErrorDetails = {
  title: string;
  detail?: string;
  errors?: Record<string, string[]>;
};

export const createError = (status: HttpStatusCode, { title, detail, errors }: ErrorDetails) => ({
  title,
  status,
  detail,
  errors,
});

export const createUnauthorizedError = (detail: string) =>
  createError(HttpStatusCode.UNAUTHORIZED, { title: "Unauthorized", detail });

export const createNotFoundError = (detail: string) =>
  createError(HttpStatusCode.NOT_FOUND, { title: "Not found", detail });

export const createConflictError = (detail: string) =>
  createError(HttpStatusCode.CONFLICT, { title: "Conflict", detail });

export const createValidationError = (detail: string, errors?: Record<string, string[]>) =>
  createError(HttpStatusCode.UNPROCESSABLE_ENTITY, { title: "Validation failed", detail, errors });

export const createServerError = (detail: string) =>
  createError(HttpStatusCode.INTERNAL_SERVER_ERROR, { title: "Internal server error", detail });
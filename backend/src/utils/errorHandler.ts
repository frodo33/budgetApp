import { ValidationError as ClassValidatorError } from "class-validator";

import { HttpStatusCode } from "../enums/httpStatus";

export type FieldValidationError = {
  field: ClassValidatorError["property"];
  errors: ClassValidatorError["constraints"];
};

export type ErrorDetails = {
  title: string;
  detail?: string;
  errors?: FieldValidationError[];
};

export const createError = (status: HttpStatusCode, { title, detail, errors }: ErrorDetails) => ({
  title,
  status,
  detail,
  errors,
});

export const createUnauthorizedError = (detail: string, errors?: FieldValidationError[]) =>
  createError(HttpStatusCode.UNAUTHORIZED, { title: "Unauthorized", detail, errors });

export const createNotFoundError = (detail: string, errors?: FieldValidationError[]) =>
  createError(HttpStatusCode.NOT_FOUND, { title: "Not found", detail, errors });

export const createConflictError = (detail: string, errors?: FieldValidationError[]) =>
  createError(HttpStatusCode.CONFLICT, { title: "Conflict", detail, errors });

export const createValidationError = (detail: string, errors?: FieldValidationError[]) =>
  createError(HttpStatusCode.UNPROCESSABLE_ENTITY, { title: "Validation failed", detail, errors });

export const createServerError = (detail: string, errors?: FieldValidationError[]) =>
  createError(HttpStatusCode.INTERNAL_SERVER_ERROR, { title: "Internal server error", detail, errors });
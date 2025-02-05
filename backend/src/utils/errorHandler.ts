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

export const createValidationError = (detail: string, errors?: FieldValidationError[]) =>
  createError(HttpStatusCode.UNPROCESSABLE_ENTITY, { title: "Validation failed", detail, errors });

export const createConflictError = (detail: string, errors?: FieldValidationError[]) =>
  createError(HttpStatusCode.CONFLICT, { title: "Conflict", detail, errors });
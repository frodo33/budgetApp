import { ValidationError } from "class-validator";

export const formatValidationErrors = (errors: ValidationError[]) => {
  const formattedErrors: Record<string, string[]> = {};

  errors.forEach((error) => {
    if (error.constraints) {
      const messages = Object.values(error.constraints);
      formattedErrors[error.property] = messages;
    }
  });

  return formattedErrors;
};
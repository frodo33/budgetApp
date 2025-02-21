import type { FieldValues, Path, UseFormSetError } from "react-hook-form";

import type { ApiError } from "./api.types";

export const setFormErrors = <T extends FieldValues>(
  setError: UseFormSetError<T>,
  validationErrors: ApiError["data"]["errors"]
) => {
  if (!validationErrors) return;

  Object.entries(validationErrors).forEach(([field, messages]) => {
    (messages).forEach((message) => {
      setError(field as Path<T>, {
        type: "validation",
        message,
      });
    });
  });
};
import type { LoaderSizeOption } from "./Loader.types"

export const getLoaderSize = (size?: LoaderSizeOption) => {
  switch (size) {
    case "small":
      return 32
    case "medium":
      return 48
    case "large":
      return 56
    default:
      return 48
  }
}
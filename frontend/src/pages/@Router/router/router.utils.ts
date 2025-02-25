import type { RoutePath } from "../routes";

export const getPath = (route: RoutePath, absolute = false) => absolute ? `/${route}` : route;
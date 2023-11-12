import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export const setCategoriesMap = (categoriesMap) => {
  return createAction(
    CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP,
    categoriesMap
  );
};

export const isCategoryLoading = () =>
  createAction(CATEGORIES_ACTION_TYPES.SET_IS_LOADING);

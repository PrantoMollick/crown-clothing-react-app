import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export const CATEGORIES_INITIAL_STATE = {
  isLoading: false,
  categories: []
};

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_IS_LOADING:
      return {
        ...state,
        isLoading: true
      };

    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return { ...state, categories: payload, isLoading: false };

    default:
      return state;
  }
};

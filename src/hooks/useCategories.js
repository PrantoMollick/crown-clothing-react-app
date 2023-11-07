import { useContext } from "react";
import { CategoriesContext } from "../contexts/categories.context";

export const useCategories = () => {
  const { categoriesMap, loading } = useContext(CategoriesContext);

  return { categoriesMap, loading };
};

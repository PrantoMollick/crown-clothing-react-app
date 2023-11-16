import { useSelector } from "react-redux";

export const useCategories = () => {
  const { categories, isLoading } = useSelector((state) => state.categories);

  const categoriesMap = categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return { categories: categoriesMap, isLoading };
};

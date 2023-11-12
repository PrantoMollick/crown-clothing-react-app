import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

import "./shop.styles.scss";
import { useEffect } from "react";
import {
  isCategoryLoading,
  setCategoriesMap
} from "../../store/categories/categories.action";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      try {
        dispatch(isCategoryLoading());
        const categoriesMap = await getCategoriesAndDocuments();
        dispatch(setCategoriesMap(categoriesMap));
      } catch (error) {
        console.error(error);
      }
    };

    getCategoriesMap();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;

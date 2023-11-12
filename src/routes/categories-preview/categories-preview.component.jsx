import React from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { ScaleLoader } from "react-spinners";

import "./categories-preview.styles.scss";
import { selectCategories } from "../../store/categories/categories.selector";
import { useSelector } from "react-redux";

const CategoriesPreview = () => {
  const { categoriesMap, isLoading } = useSelector(selectCategories);

  return (
    <>
      <div className={`${isLoading ? "loader" : ""}`}>
        <ScaleLoader loading={isLoading} />
      </div>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;

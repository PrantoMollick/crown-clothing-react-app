import React from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { ScaleLoader } from "react-spinners";

import "./categories-preview.styles.scss";

import { useCategories } from "../../hooks/useCategories";

const CategoriesPreview = () => {
  const { categories, isLoading } = useCategories();

  return (
    <>
      <div className={`${isLoading ? "loader" : ""}`}>
        <ScaleLoader loading={isLoading} />
      </div>
      {Object.keys(categories).map((title) => {
        const products = categories[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;

import React from "react";
import { useCategories } from "../../hooks/useCategories";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { ScaleLoader } from "react-spinners";

import "./categories-preview.styles.scss";

const CategoriesPreview = () => {
  const { categoriesMap, loading } = useCategories();

  return (
    <>
      <div className={`${loading ? "loader" : ""}`}>
        <ScaleLoader loading={loading} />
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

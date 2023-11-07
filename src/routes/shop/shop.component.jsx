import { Fragment } from "react";
import { ScaleLoader } from "react-spinners";

import { useCategories } from "../../hooks/useCategories";
import ProductCard from "../../components/product-card/product-card.component";

import "./shop.styles.scss";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const Shop = () => {
  const { categoriesMap, loading } = useCategories();

  return (
    <div className="shop-container">
      <div className={`${loading ? "loader" : ""}`}>
        <ScaleLoader loading={loading} />
      </div>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default Shop;

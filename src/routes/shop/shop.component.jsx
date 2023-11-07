import { Fragment } from "react";
import { ScaleLoader } from "react-spinners";

import { useCategories } from "../../hooks/useCategories";
import ProductCard from "../../components/product-card/product-card.component";

import "./shop.styles.scss";

const Shop = () => {
  const { categoriesMap, loading } = useCategories();

  return (
    <>
      <div className={`${loading ? "loader" : ""}`}>
        <ScaleLoader loading={loading} />
      </div>
      {Object.keys(categoriesMap).map((title) => {
        return (
          <Fragment key={title}>
            <h2>{title}</h2>
            <div className="products-container">
              {categoriesMap[title].map((product) => (
                <ProductCard key={product.id} product={product}></ProductCard>
              ))}
            </div>
          </Fragment>
        );
      })}
    </>
  );
};

export default Shop;

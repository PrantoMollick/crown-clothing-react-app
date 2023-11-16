import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";
import { ScaleLoader } from "react-spinners";

import "./category.styles.scss";
import { useCategories } from "../../hooks/useCategories";

const Category = () => {
  const { isLoading, categories } = useCategories();
  const { category } = useParams();

  const products = categories[category.toLowerCase()] || [];

  if (products.length > 0) {
    return (
      <>
        <h2 className="category-title">{category.toUpperCase()}</h2>
        <div className="category-container">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <div className={`${isLoading ? "loader" : ""}`}>
        <ScaleLoader loading={isLoading} />
      </div>
      {products.length === 0 && !isLoading && <div>No Found Any product</div>}
    </>
  );
};

export default Category;

import { useParams } from "react-router-dom";
import { useCategories } from "../../hooks/useCategories";
import ProductCard from "../../components/product-card/product-card.component";
import { ScaleLoader } from "react-spinners";

import "./category.styles.scss";

const Category = () => {
  const { categoriesMap, loading } = useCategories();
  const { category } = useParams();

  const products = categoriesMap[category.toLowerCase()] || [];

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
      <div className={`${loading ? "loader" : ""}`}>
        <ScaleLoader loading={loading} />
      </div>
      {products.length === 0 && !loading && <div>No Found Any product</div>}
    </>
  );
};

export default Category;

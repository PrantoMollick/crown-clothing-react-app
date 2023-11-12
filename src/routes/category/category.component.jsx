import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";
import { ScaleLoader } from "react-spinners";

import "./category.styles.scss";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/categories.selector";

const Category = () => {
  const { categoriesMap, isLoading } = useSelector(selectCategories);
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
      <div className={`${isLoading ? "loader" : ""}`}>
        <ScaleLoader loading={isLoading} />
      </div>
      {products.length === 0 && !isLoading && <div>No Found Any product</div>}
    </>
  );
};

export default Category;

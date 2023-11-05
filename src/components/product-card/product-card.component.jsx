import "./product-card.styles.scss";

import Button from "../button/button.component";
import { useCart } from "../../hooks/useCart";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useCart();
  const { name, imageUrl, price } = product;

  const handleAddItemtoCart = (product) => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType="inverted"
        onClick={() => handleAddItemtoCart(product)}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;

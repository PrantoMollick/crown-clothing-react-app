import "./cart-icon.styles.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useCart } from "../../hooks/useCart";

const CartIcon = () => {
  const { setIsCartOpen, cartItems, cartCount } = useCart();
  const toggleIsCartOpenHandler = () => setIsCartOpen((isOpen) => !isOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpenHandler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;

import "./cart-icon.styles.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useCart } from "../../hooks/useCart";

const CartIcon = () => {
  const { setIsCartOpen } = useCart();

  const toggleIsCartOpenHandler = () => setIsCartOpen((isOpen) => !isOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpenHandler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;

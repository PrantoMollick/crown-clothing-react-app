import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useCart } from "../../hooks/useCart";

import "./cart-dropdown-styles.scss";

const CartDropdown = () => {
  const navigate = useNavigate();
  const { cartItems, setIsCartOpen } = useCart();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
    setIsCartOpen(false);
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems?.map((item) => (
          <CartItem key={item.id} cartitem={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>Go TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;

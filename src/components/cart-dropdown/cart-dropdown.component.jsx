import "./cart-dropdown-styles.scss";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useCart } from "../../hooks/useCart";

const CartDropdown = () => {
  const { cartItems } = useCart();

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems?.map((item) => (
          <CartItem key={item.id} cartitem={item} />
        ))}
      </div>
      <Button>Go TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;

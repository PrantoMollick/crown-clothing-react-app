import Checkoutitem from "../../components/checkout-item/checkout-item.component";
import { useCart } from "../../hooks/useCart";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems } = useCart();

  const rowHeaders = [
    {
      label: "Product"
    },
    {
      label: "Description"
    },
    {
      label: "Quantity"
    },
    {
      label: "Price"
    },
    {
      label: "Remove"
    }
  ];

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        {rowHeaders.map((header) => (
          <div className="header-block" key={header.label}>
            <span>{header.label}</span>
          </div>
        ))}
      </div>

      {cartItems.map((cartItem) => (
        <Checkoutitem key={cartItem.id} cartItem={cartItem} />
      ))}

      <span className="total">Total: 0</span>
    </div>
  );
};

export default Checkout;

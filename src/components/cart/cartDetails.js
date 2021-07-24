import React from "react";
import CartDetailRows from "./cartDetailRow";
import { Link } from "react-router-dom";
import {
  updateCartQuantity,
  removeFromCart
} from "../shopData/actions/creators";
const CartDetails = ({
  cart,
  cartPrice,
  updateCartQuantity,
  removeFromCart,
  cartItems
}) => {
  return (
    <div className="row centered middle aligned">
      <div className="ten wide column">
        <h3 className="ui fluid basic label header">Your Cart</h3>
        <table className="ui table">
          <thead>
            <tr>
              <th>Quantity</th>
              <th>Product</th>
              <th className="text-right">Price</th>
              <th className="text right">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <CartDetailRows
              cart={cart}
              cartPrice={cartPrice}
              updateQty={updateCartQuantity}
              removeFromCart={removeFromCart}
            />
          </tbody>
        </table>
        <div className="row">
          <Link className="ui left floated violet button" to="/shop/products">
            Continue Shopping
          </Link>

          <Link
            className={`${
              cartItems === 0
                ? "ui positive floated button disabled"
                : "ui positive button"
            }`}
            to="/shop/checkout"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;

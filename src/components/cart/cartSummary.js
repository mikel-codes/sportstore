import React from "react";
import { Link } from "react-router-dom";

const CartSummary = props => {
  const getSummary = () => {
    if (props.cartItems > 0) {
      return <span>${props.cartPrice.toFixed(2)}</span>;
    }
    return <span>$0.00</span>;
  };
  const getLinkClassName = () => {
    return `ui circular label black ${props.cartItems === 0 ? "disabled" : ""}`;
  };
  return (
    <div className="right floated">
      <small>
        Your cart is {getSummary()} =
        <Link className={getLinkClassName()} to="/shop/cart">
          <i className="ui cart icon"></i>
          {props.cartItems}
        </Link>
        item(s)
      </small>
    </div>
  );
};

export default CartSummary;

import React from "react";

export const OrdersRow = props => {
  const totalCost = products => {
    console.log(products);
    products
      .reduce((total, p) => (total += p.quanity * p.product.price), 0)
      .toFixed(2);
  };

  const getShipping = shipped => {
    shipped ? (
      <i className="ui heart icon"></i>
    ) : (
      <i className="ui warning icon"></i>
    );
  };

  return (
    <tr>
      <td>{props.order.id}</td>
      <td>{props.order.name}</td>
      <td>{props.order.email}</td>
      <td></td>
      <td>
        <button className="ui icon raised button" onClick={props.toggleShipped}>
          {getShipping(this.props.onClick)}
          {props.order.shipped ? "Shipped" : "Pending"}
        </button>
      </td>
    </tr>
  );
};

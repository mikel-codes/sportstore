import React from "react";

export const Product = props => {
  if (props.products == null || props.products.length === 0)
    return <p className="ui fluid huge label">No Products</p>;
  else {
    return props.products.map(p => (
      <div className="ui raised  card" key={p.id} style={{ height: "12rem" }}>
        <a className="ui orange left ribbon label">${p.price.toFixed(2)}</a>
        <br />
        <span className="ui header">{p.category}</span>

        <p>{p.description}</p>

        <button
          className="circular ui small blue icon  button "
          onClick={() => props.addToCart(p)}
        >
          <i className="ui plus icon cart"></i>
        </button>
      </div>
    ));
  }
};

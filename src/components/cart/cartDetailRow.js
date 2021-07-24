import React, { Component } from "react";

export default class CartDetailRows extends Component {
  constructor(props) {
    super(props);
  }
  handleChange = (product, event) => {
    this.props.updateQuantity(product, event.target.value);
  };
  handleRemove = (product, ev) => {
    this.props.removeFromCart(product, ev);
  };
  render() {
    if (!this.props.cart || this.props.cart.length === 0) {
      return (
        <tr>
          <td
            className="ui fluid green label"
            style={{ width: "100%", border: "1px solid red" }}
          >
            Cart is Empty
          </td>
        </tr>
      );
    }

    return (
      <React.Fragment>
        {this.props.cart.map(item => (
          <tr key={item.product.id}>
            <td>
              <input
                type="number"
                className="ui small input"
                value={item.quantity}
                onChange={ev => {
                  this.handleChange(item.product, ev);
                  alert("ye;");
                }}
              />
            </td>
            <td>{item.product.name}</td>
            <td>${item.product.price.toFixed(2)}</td>
            <td>${item.quantity * item.product.price}</td>
            <td>
              <i
                className="ui red circle times icon"
                onClick={ev => this.handleRemove(item.product, ev)}
              ></i>
            </td>
          </tr>
        ))}
        <tr>
          <td colSpan="3">Total</td>
          <td>${this.props.cartPrice.toFixed(2)}</td>
        </tr>
      </React.Fragment>
    );
  }
}

import React, { Component } from "react";
import ValidatedForm from "../forms/validatedForm";
export default class Checkout extends Component {
  constructor(props) {
    super(props);
    this.defaultAttrs = { type: "text", required: true };
    this.formModel = [
      { label: "Name" },
      { label: "Email", attrs: { type: "email" } },
      { label: "Address" },
      { label: "City" },
      { label: "Zip/Postal Code", name: "zip" },
      { label: "Country" }
    ];
  }
  handleSubmit = formData => {
    const order = {
      ...formData,
      products: this.props.cart.map(item => ({
        quantity: item.quantity,
        product_id: item.product_id
      }))
    };
    this.props.placeOrder(order);
    this.props.clearCart();
    this.props.history.push("/shop/cart");
  };

  handleCancel = () => {
    this.props.history.push("/shop/cart");
  };

  render() {
    return (
      <div className="row">
        <div className="ui fluid label">SportsStore Checkout</div>
        <ValidatedForm
          formModel={this.formModel}
          defaultAttrs={this.defaultAttrs}
          submitCallback={this.handleSubmit}
          cancelCallback={this.handleCancel}
          submitText="Place Order"
          cancelText="Return To Cart"
        />
      </div>
    );
  }
}

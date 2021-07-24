import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Thanks extends Component {
  render() {
    return (
      <div>
        <h2 className="ui header">Thanks!</h2>
        <p>Thanks for placing your order</p>
        <p>Your order is #{this.props.order ? this.props.order.id : 0}</p>
        <p>We will ship your goods as soon as possible.</p>

        <Link to="/shop" className="ui button primary">
          Return to store
        </Link>
      </div>
    );
  }
}

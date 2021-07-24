import React, { Component } from "react";
import {
  loadData,
  placeOrder,
  updateCartQuantity,
  removeFromCart,
  clearCart,
  addToCart
} from "../shopData/actions/creators";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { DataTypes } from "../shopData/actions/types";
import { Shop } from "./shop";
import CartDetails from "../cart/cartDetails";

import DataGetter from "../shopData/dataGetter";
import Checkout from "./checkout";
import Thanks from "./thanks";

const mapStateToProps = store => ({
  ...store
});

const mapDispatchToProps = {
  loadData,
  placeOrder,
  addToCart,
  updateCartQuantity,
  removeFromCart,
  clearCart
};

export const ShopConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  class extends Component {
    //once loaded and connected to the redux store
    //initiate actions by calling to the redux via connection
    componentDidMount() {
      this.props.loadData(DataTypes.CATEGORIES);
    }

    render() {
      return (
        <Switch>
          <Redirect
            from="/shop/products/:category"
            to="/shop/products/:category/1"
            exact={true}
          />
          <Route
            path="/shop/products/:category/:page"
            render={routeProps => (
              <DataGetter {...this.props} {...routeProps}>
                <Shop {...this.props} {...routeProps} />
              </DataGetter>
            )}
          />

          <Route
            path="/shop/cart"
            render={routeProps => (
              <CartDetails {...this.props} {...routeProps} />
            )}
          />
          <Route
            path="/shop/checkout"
            render={routeProps => <Checkout {...this.props} {...routeProps} />}
          />
          <Route
            path="/shop/thanks"
            render={routeProps => <Thanks {...this.props} {...routeProps} />}
          />
          <Redirect to="/shop/products/all/1" />
        </Switch>
      );
    }
  }
);

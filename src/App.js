import React, { Component } from "react";
import { ShopConnector } from "./components/shop/shopConnector";
import { Provider } from "react-redux";
import { StoreData } from "./components/shopData/store";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./errors";
import Admin from "./components/admin/admin";

// import { Container } from './styles';

export default class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui very stackable grid">
          <ErrorBoundary>
            <Provider store={StoreData}>
              <BrowserRouter>
                <Switch>
                  <Route path="/shop" component={ShopConnector} />
                  <Route path="/admin" component={Admin} />
                  <Redirect to="/shop" />
                </Switch>
              </BrowserRouter>
            </Provider>
          </ErrorBoundary>
        </div>
      </div>
    );
  }
}

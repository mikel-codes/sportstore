import React, { Component } from "react";
import { Product } from "./product";
import { Category } from "./category";
import CartSummary from "../cart/cartSummary";
import PaginationCtrls from "../pagination/paginationCtrls";
import { ProductPageConnector } from "../pagination/productPageConnector";

const ProductPages = ProductPageConnector(PaginationCtrls);
export class Shop extends Component {
  constructor(props) {
    super(props);
  }
  handleAddToCart = (...args) => {
    this.props.addToCart(...args);
    //this.props.history.push("/shop/cart");
  };
  render() {
    return (
      <React.Fragment>
        <div className="ui fluid red bordered menu">
          <div className="ui huge header item">
            <i className="ui breadcrumbs icon"></i>Sports Store
          </div>
          <div className="right floated item">
            <CartSummary {...this.props} />
          </div>
        </div>
        <div className="row">
          <div className="four wide column">
            <Category
              baseUrl="/shop/products"
              categories={this.props.categories}
            />
          </div>
          <div className="ten wide column">
            <ProductPages />
            <div className="ui three column wide grid">
              <Product
                addToCart={this.handleAddToCart}
                products={this.props.products}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

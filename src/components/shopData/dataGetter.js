import React, { Component } from "react";
import { DataTypes } from "./actions/types";

// a component to be seen as the pagination component
export default class DataGetter extends Component {
  // when updated or mounted  make a call
  componentDidUpdate = () => this.getData();
  componentDidMount = () => this.getData();

  // do the main work
  getData = () => {
    // collect all the products_params as received from the action reducer which updates the redux store
    const dsData = this.props.products_params || {};

    const rtData = {
      _limit: this.props.pageSize || 5,
      _sort: this.props.sortKey || "name",
      _page: this.props.match.params.page || 1,
      category_like:
        (this.props.match.params.category || "") === "all"
          ? ""
          : this.props.match.params.category
    };
    // always compare results when called by checking the rtData and checking for differences in the
    if (Object.keys(rtData).find(key => dsData[key] !== rtData[key])) {
      this.props.loadData(DataTypes.PRODUCTS, rtData);
    }
  };
  render() {
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}

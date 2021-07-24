import React, { Component } from "react";
import PaginationButtons from "./paginationButtons";

export default class PaginationCtrls extends Component {
  constructor(props) {
    super(props);
    this.pageSizes = this.props.sizes || [5, 10, 25, 100];
    this.sortKeys = this.props.keys || ["Name", "Price"];
  }
  handlePageSizeChange = ev => {
    this.props.setPageSize(ev.target.value);
  };
  handleSortPropertyChange = ev => {
    this.props.setSortProperty(ev.target.value);
  };
  render() {
    const { currentPage, pageCount, navigateToPage, sizes, keys } = this.props;
    return (
      <div className="ui borderless menu">
        <div className="left floated  item">
          <PaginationButtons
            currentPage={this.props.currentPage}
            pageCount={this.props.pageCount}
            navigate={this.props.navigateToPage}
          />
        </div>
        <div className="right floated item">
          <select
            className="ui search dropdown"
            onChange={this.handlePageSizeChange}
            value={this.props.pageSize || this.pageSizes[0]}
          >
            {this.pageSizes.map(s => (
              <option value={s} key={s}>
                {s}items per page
              </option>
            ))}
          </select>
        </div>

        <select
          className="ui input"
          onChange={this.handleSortPropertyChange}
          value={this.props.sortKey || this.sortKeys[0]}
        >
          {this.sortKeys.map(s => (
            <option value={s} key={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

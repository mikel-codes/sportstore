import React, { Component } from "react";

export default class PaginationButtons extends Component {
  constructor(props) {
    super(props);
  }

  getPageNumbers = () => {
    if (this.props.pageCount < 4) {
      return [...Array(this.props.pageCount + 1).keys()].slice(1);
    } else if (this.props.currentPage <= 4) {
      return [1, 2, 3, 4, 5];
    } else if (this.props.currentPage > this.props.pageCount - 4) {
      return [...Array(5).keys()].reverse().map(v => this.props.pageCount - v);
    } else {
      return [
        this.props.currentPage - 1,
        this.props.currentPage,
        this.props.currentPage + 1
      ];
    }
  };

  render() {
    const current = this.props.currentPage;
    const pageCount = this.props.pageCount;
    const navigate = this.props.navigate;

    console.log("current", current);
    return (
      <React.Fragment>
        <button
          className="circular ui icon basic primary button "
          disabled={current === 1}
          onClick={() => navigate(current - 1)}
        >
          &larr;
        </button>

        {current > 4 && (
          <React.Fragment>
            <button
              className="circular ui  icon primary button"
              onClick={() => navigate(1)}
            >
              1
            </button>
            <span className="ui header">...</span>
          </React.Fragment>
        )}
        {this.getPageNumbers().map(n => (
          <button
            key={n}
            className={`circular ui  icon button ${
              current === n ? "primary" : "basic"
            }`}
            onClick={() => navigate(n)}
          >
            {n}
          </button>
        ))}
        {current <= pageCount - 4 && (
          <React.Fragment>
            <span className="ui header"> ... </span>
            <button
              onClick={() => navigate(pageCount)}
              className="circular ui icon basic primary button"
            >
              {pageCount}
            </button>
          </React.Fragment>
        )}
        <button
          className="circular ui icon basic primary button"
          disabled={current === pageCount}
          onClick={() => navigate(current + 1)}
        >
          &rarr;
        </button>
      </React.Fragment>
    );
  }
}

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductTable = props => {
  return (
    <div>
      <table className="ui table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.products.map(p => (
            <ProductRow
              key={p.id}
              product={p}
              deleteProduct={props.deleteProduct}
            />
          ))}
        </tbody>
      </table>
      <Link
        to="/admin/products/create"
        className="ui center aligned fluid label"
      >
        <i className="ui positive circle plus icon"></i>New product
      </Link>
    </div>
  );
};

ProductTable.propTypes = {};

export default ProductTable;

import React from "react";

const ProductRow = props => {
  return (
    <tr>
      <td>{props.product.id}</td>
      <td>{props.product.name}</td>
      <td>{props.product.price}</td>
      <td>
        <button
          className="circular ui trash icon button"
          onClick={() => props.deleteProduct(p)}
        ></button>
      </td>
    </tr>
  );
};

ProductRow.propTypes = {};

export default ProductRow;

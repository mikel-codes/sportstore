import React from "react";
import PaginationCtrls from "../pagination/paginationCtrls";
import { OrdersRow } from "./ordersRow";
export class OrdersTable extends React.Component {
  render = () => (
    <div>
      <h4 className="bg-info text-white text-center p-2">
        {this.props.totalSize} Orders
      </h4>
      <PaginationCtrls keys={["ID", "Name"]} {...this.props} />
      <table className="table table-sm table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th className="text-right">Total</th>
            <th className="text-center">Shipped</th>
          </tr>
        </thead>
        <tbody>
          {this.props.orders.map(order => (
            <OrdersRow
              key={order.id}
              order={order}
              toggleShipped={() =>
                this.props.toggleShipped(order.id, !order.shipped)
              }
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

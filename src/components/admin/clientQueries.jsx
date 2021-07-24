import gql from "graphql-tag";
export const ordersSummaryQuery = gql`
  query($onlyUnshipped: Boolean, $page: Int, $pageSize: Int, $sort: String) {
    orders(onlyUnshipped: $onlyUnshipped) {
      totalSize
      orders(page: $page, pageSize: $pageSize, sort: $sort) {
        id
        name
        email
        shipped
        products {
          quantity
          product {
            price
          }
        }
      }
    }
  }
`;

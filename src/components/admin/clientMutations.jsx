import gql from "graphql-tag";
export const shipOrder = gql`
  mutation($id: ID!, $shippped: Boolean) {
    ShipOrder(id: $id, shipped: $shipped) {
      id
      shipped
    }
  }
`;

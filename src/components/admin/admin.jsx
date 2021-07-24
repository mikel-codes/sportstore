import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { OrdersConnector } from "./ordersConnector";
import { ApolloClient, HttpLink } from "apollo-boost";
import { GraphQlUrl } from "../shopData/urls";
import { InMemoryCache } from "apollo-cache-inmemory";

const cache = new InMemoryCache();
const graphQlClient = new ApolloClient({
  cache,
  link: new HttpLink({ uri: GraphQlUrl })
});
export default class Admin extends Component {
  render() {
    return (
      <ApolloProvider client={graphQlClient}>
        <div className="ui fluid center aligned label">Sports</div>
        <OrdersConnector />
      </ApolloProvider>
    );
  }
}

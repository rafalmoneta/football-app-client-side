import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import { gql } from "apollo-boost";

const link = new HttpLink({uri: 'http://localhost:8000/graphql'})
const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache
})

client
  .query({
    query: gql`
      {
        teams {
          name
        }
      }
    `
  })
  .then(result => console.log(result));


export default client;
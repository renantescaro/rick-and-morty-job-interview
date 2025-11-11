import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const link = new HttpLink({
  uri: "https://rickandmortyapi.com/graphql",
});

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

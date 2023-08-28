import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: "https://api.amboss.space/graphql",
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;

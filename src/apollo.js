import { ApolloClient, InMemoryCache } from "@apollo/client";

const hashnodeClient = new ApolloClient({
  uri: process.env.HASHNODE_URL,
  cache: new InMemoryCache(),
});

const serverClient = new ApolloClient({
  uri: process.env.SERVER_URL,
  cache: new InMemoryCache(),
});

export { hashnodeClient, serverClient };

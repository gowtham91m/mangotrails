import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from "apollo-link-context";

// Replace this with your GraphQL endpoint
const uri =
  "https://skfzxonmzjcu7agfgki3vcokoi.appsync-api.us-west-2.amazonaws.com/graphql";

const apiKey = "da2-j4f4m24oozh7jdxgjidybb7hvm";
// Create an Apollo Client instance

const httpLink = createHttpLink({
  uri: uri,
  headers: {
    "x-api-key": apiKey,
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const uri = "https://svc2mz5uyneshj7hpvo5gwgfpi.appsync-api.us-west-2.amazonaws.com/graphql"
// const uri = "https://interests.gowtham.live/graphql"
const apiKey = "da2-gyhsyhiynndxhg36m6bym622b4";

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
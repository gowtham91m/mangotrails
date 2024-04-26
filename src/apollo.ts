import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
// 
// const uri = "https://wk4ssk2jlffftn2vowjbs6abyq.appsync-api.us-west-2.amazonaws.com/graphql"
const uri = "https://interests.gowtham.live/graphql"
const apiKey = "da2-7qhkm3k2fvaolb2rnakedv3nda";

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
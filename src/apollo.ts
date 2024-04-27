import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

// const uri = "https://s7khucuo7zf63p3upejpqllyqe.appsync-api.us-east-1.amazonaws.com/graphql"
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
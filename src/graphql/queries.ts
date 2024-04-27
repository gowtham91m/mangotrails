/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFavorites = /* GraphQL */ `
  query GetFavorites($type: String!, $title: String!) {
    getFavorites(type: $type, title: $title) {
      title
      type
      description
      rating
      genre
      author
      image
    }
  }
`;

export const listFavorites = /* GraphQL */ `
  query ListFavorites(
    $filter: TableFavoritesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFavorites(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        title
        type
        description
        rating
        genre
        author
        image
      }
      nextToken
    }
  }
`;



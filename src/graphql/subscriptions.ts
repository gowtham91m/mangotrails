/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFavorites = /* GraphQL */ `
  subscription OnCreateFavorites(
    $title: String
    $type: String
    $description: String
    $rating: String
    $genre: String
  ) {
    onCreateFavorites(
      title: $title
      type: $type
      description: $description
      rating: $rating
      genre: $genre
    ) {
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
export const onUpdateFavorites = /* GraphQL */ `
  subscription OnUpdateFavorites(
    $title: String
    $type: String
    $description: String
    $rating: String
    $genre: String
  ) {
    onUpdateFavorites(
      title: $title
      type: $type
      description: $description
      rating: $rating
      genre: $genre
    ) {
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
export const onDeleteFavorites = /* GraphQL */ `
  subscription OnDeleteFavorites(
    $title: String
    $type: String
    $description: String
    $rating: String
    $genre: String
  ) {
    onDeleteFavorites(
      title: $title
      type: $type
      description: $description
      rating: $rating
      genre: $genre
    ) {
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

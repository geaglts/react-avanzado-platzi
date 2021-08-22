import { gql } from 'apollo-boost';

export const ALL_PHOTOS = gql`
  query ($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`;

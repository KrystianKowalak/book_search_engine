import { gql } from '@apollo/client';

export const QUERY_GET_SSINGLE_USER = gql`
  query getSingleUser {
    user {
      _id
      username
      email
      password
      bookCount
      savedBooks {
        bookId
        authors
        description
        image
        link
        title
      }
    }
  }
`;

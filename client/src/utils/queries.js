import { gql } from '@apollo/client';

export const QUERY_GET_SINGLE_USER = gql`
  query getSingleUser {
    getSingleUser {
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

const typeDefs = `
  type Book {
    _id: ID
    authors: String
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    getSingleUser(userId: ID!): User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(book: Book!): User
    deleteBook(bookId: String!): User
  }
`;

module.exports = typeDefs;

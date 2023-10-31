const typeDefs = `
  type Book {
    bookId: ID
    authors: [String]
    description: String
    image: String
    link: String
    title: String
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks: [Book]!
  }

  type Auth {
    token: ID!
    user: User
  }

  input Book {
    authors: [String]
    description: String
    title: String
    bookId: ID
    image: String
    link: String
  }

  type Query {
    getSingleUser: User
  }


  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(book: Book): User
    deleteBook(bookId: String!): User
  }
`;

module.exports = typeDefs;

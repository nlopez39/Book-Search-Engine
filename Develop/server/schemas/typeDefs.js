const typeDefs = `
type User {
    _id : ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}
input Book {
    bookId: ID
    authors: [String!]
    desription: String
    title: String
    image: String
    link: String
}
type Auth{
    token: ID!
    user: User
}
type Query {
    me: User
}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(criteria: Book) : User
    removeBook(bookId: ID!): User
}
`;

module.exports = typeDefs;

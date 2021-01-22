const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    welcome: String!
    authorById(id: ID!): Author!
  }
  type Mutation {
    addAuthor(input: addAuthorInput): Author!
  }
  input addAuthorInput {
    firstName: String!
    lastName: String!
    age: Int!
    email: String!
    numBooksPublished: String!
    address: Address!
  }
  type Author {
    id: ID!
    firstName: String!
    lastName: String!
    age: Int!
    email: String!
    numBooksPublished: String!
    address: Address!
  }
  type Address {
    id: ID!
    street: String!
    city: String!
    state: String!
    zip: Int!
  }
  type Query {
    welcome: String!
    publisherById(id: ID!): Publisher!
  }
  type Mutation {
    addPublisher(input: addPublisherInput): Publisher!
  }
  input addPublisherInput {
    company: String!
    phoneNumber: String!
    numBooksPublished: Int!
    address: Address!
  }
  type Publisher {
    id: ID!
    company: String!
    phoneNumber: String!
    numBooksPublished: Int!
    address: Address!
  }
`

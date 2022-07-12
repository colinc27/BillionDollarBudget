const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Assets {
    _id: ID
    salary: String
    createdAt: String
    username: String
  }

  type Liabilities {
    _id: ID
    rent: Int
    utilities: Int
    username: String
    reoccurringBills: Int
    gas: Int
    food: Int
  }

  type User {
    _id: ID
    username: String
    email: String
    assets: [Assets]
    liabilities: [Liabilities]
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    assets(username: String!): [Assets]
    liabilities(username: String!): [Liabilities]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addAssets(username: String!,salary: String!): Assets
    addLiabilities(username: String!): Liabilities
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;

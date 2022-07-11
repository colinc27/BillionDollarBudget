const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Assets {
    _id: ID
    salary: Int
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
    users: [User]
    user(username: String!): User
    assets(username: String!): [Assets]
    liabilities(username: String!): [Liabilities]
  }
`;

module.exports = typeDefs;

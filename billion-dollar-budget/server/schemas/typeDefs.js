const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Assets {
    _id: ID
    salary: String
    createdAt: String
    username: String
    month:String
    year: String
  }

  type Liabilities {
    _id: ID
    rent: String
    utilities: String
    username: String
    reoccurringBills: String
    gas: String
    food: String
    monthName:String
    year: String
  }

  type ExpectedLiabilities {
    _id: ID
    rent: String
    utilities: String
    username: String
    reoccurringBills: String
    gas: String
    food: String
    monthName:String
    year: String
  }

  type User {
    _id: ID
    username: String
    email: String
    assets: [Assets]
    liabilities: [Liabilities]
    expectedLiabilities: [ExpectedLiabilities]
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User

    assets(username: String!): [Assets]
    assetsPerMonth(username: String!,monthName: String!,year:String!): [Assets]

    liabilities(username: String!): [Liabilities]
    liabilitiesPerMonth(username: String!,monthName: String!,year:String!): [Liabilities]

    expectedLiabilities(username: String!): [ExpectedLiabilities]   
    expectedLiabilitiesPerMonth(username: String!,monthName: String!,year:String!): [ExpectedLiabilities]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth

    addAssets(username: String!,salary: String!,monthName: String!,year:String!): Assets
    removeAssets(_id: ID!): Assets
    updateAssets(_id: ID!,salary: String!): Assets

    addLiabilities(username: String!,monthName: String!,year:String!): Liabilities
    updateLiabilities(_id: ID!,username: String!): Liabilities
    removeLiabilities(_id: ID!): Liabilities

    addExpectedLiabilities(username: String!,monthName: String!): ExpectedLiabilities
    updateExpectedLiabilities(_id: ID!,username: String!): ExpectedLiabilities
    removeExpectedLiabilities(_id: ID!): ExpectedLiabilities
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;

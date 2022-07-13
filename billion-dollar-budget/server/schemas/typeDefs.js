const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Assets {
    _id: ID
    salary: Float
    createdAt: String
    username: String
    monthName:String
    year: String
  }

  type Liabilities {
    _id: ID
    rent: Float
    utilities: Float
    username: String
    reoccurringBills: Float
    gas: Float
    food: Float
    monthName:String
    year: String
  }

  type ExpectedLiabilities {
    _id: ID
    rent: Float
    utilities: Float
    username: String
    reoccurringBills: Float
    gas: Float
    food: Float
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
    assetsPerMonth(username: String!,monthName: String!,year:String!): Assets
    assetById(_id:ID!): Assets

    liabilities(username: String!): [Liabilities]
    liabilitiesPerMonth(username: String!,monthName: String!,year:String!): [Liabilities]

    expectedLiabilities(username: String!): [ExpectedLiabilities]   
    expectedLiabilitiesPerMonth(username: String!,monthName: String!,year:String!): [ExpectedLiabilities]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth

    addAssets(salary: Float!,monthName: String!,year:String!): Assets
    removeAssets(_id: ID!): Assets
    updateAssets(_id: ID!,salary: Float!): Assets

    addLiabilities(monthName: String!,year:String!,rent:Float,gas:Float,utilities:Float,reoccurringBills:Float,food:Float): Liabilities
    updateLiabilities(_id: ID!,rent:Float,gas:Float,utilities:Float,reoccurringBills:Float,food:Float): Liabilities
    removeLiabilities(_id: ID!): Liabilities

    addExpectedLiabilities(monthName: String!,year:String!): ExpectedLiabilities
    updateExpectedLiabilities(_id: ID!): ExpectedLiabilities
    removeExpectedLiabilities(_id: ID!): ExpectedLiabilities
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;

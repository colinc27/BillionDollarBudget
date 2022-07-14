import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_SALARY = gql`
  mutation addAssets($salary: Float!, $monthName: String!, $year: String!) {
    addAssets(salary: $salary, monthName: $monthName, year: $year) {
      _id
      salary
      createdAt
      username
      monthName
    }
  }
`;

export const UPDATE_SALARY = gql`
  mutation updateAsset($salary: Float!, $_id: ID!) {
    updateAssets(salary: $salary, _id: $_id) {
      salary
      _id
    }
  }
`;

export const DELETE_SALARY = gql`
  mutation removeAssets($_id: ID!) {
    removeAssets(_id: $_id) {
      _id
      username
      salary
      monthName
    }
  }
`;

export const ADD_LIABILITY = gql`
  mutation addLiabilities(
    $monthName: String!
    $year: String!
    $rent: Float
    $food: Float
    $utilities: Float
    $reoccurringBills: Float
    $gas: Float
  ) {
    addLiabilities(
      monthName: $monthName
      year: $year
      rent: $rent
      food: $food
      utilities: $utilities
      reoccurringBills: $reoccurringBills
      gas: $gas
    ) {
      _id
      username
      monthName
      year
      rent
      utilities
      reoccurringBills
      gas
      food
    }
  }
`;

export const UPDATE_LIABILITY = gql`
  mutation updateLiabilities(
    $rent: Float
    $food: Float
    $utilities: Float
    $reoccurringBills: Float
    $gas: Float
    $_id: ID!
  ) {
    updateLiabilities(
      rent: $rent
      food: $food
      utilities: $utilities
      reoccurringBills: $reoccurringBills
      gas: $gas
      _id: $_id
    ) {
      _id
      username
      monthName
      year
      rent
      utilities
      reoccurringBills
      gas
      food
    }
  }
`;

export const DELETE_LIABILITY = gql`
  mutation deleteLiabilities($_id: ID!) {
    removeLiabilities(_id: $_id) {
      _id
      username
      monthName
      year
      rent
      utilities
      reoccurringBills
      gas
      food
    }
  }
`;

export const ADD_EXPECTED_LIABILITY = gql`
  mutation addExpectedLiabilities(
    $monthName: String!
    $year: String!
    $rent: Float
    $food: Float
    $utilities: Float
    $reoccurringBills: Float
    $gas: Float
  ) {
    addExpectedLiabilities(
      monthName: $monthName
      year: $year
      rent: $rent
      food: $food
      utilities: $utilities
      reoccurringBills: $reoccurringBills
      gas: $gas
    ) {
      _id
      username
      monthName
      year
      rent
      utilities
      reoccurringBills
      gas
      food
    }
  }
`;

export const UPDATE_EXPECTED_LIABILITY = gql`
  mutation updateExpectedLiabilities(
    $rent: Float
    $food: Float
    $utilities: Float
    $reoccurringBills: Float
    $gas: Float
    $_id: ID!
  ) {
    updateExpectedLiabilities(
      rent: $rent
      food: $food
      utilities: $utilities
      reoccurringBills: $reoccurringBills
      gas: $gas
      _id: $_id
    ) {
      _id
      username
      monthName
      year
      rent
      utilities
      reoccurringBills
      gas
      food
    }
  }
`;

export const DELETE_EXPECTED_LIABILITY = gql`
  mutation removeExpectedLiabilities($_id: ID!) {
    removeExpectedLiabilities(_id: $_id) {
      _id
      username
      monthName
      year
      rent
      utilities
      reoccurringBills
      gas
      food
    }
  }
`;



import { gql } from '@apollo/client';

export const QUERY_BUDGET = gql`
  query budget($username: String) {
    budget(username: $username) {
      _id
      createdAt
      username
      paycheck
      rent
      utilities
      reocurring bills
      gas
      food
    }
  }
`;



export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      createdAt
      username
      paycheck
      rent
      utilities
      reocurring bills
      gas
      food
    }
  }
`;

import { gql } from '@apollo/client';
/*
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
*/

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      createdAt
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      assets {
        salary
      }
      liabilities{
        _id
        food
        rent
        utilities
        reoccurringBills
        gas
      }
      expectedLiabilities{
        food
        rent
        utilities
        reoccurringBills
        gas
      }
    }
  }
  `;
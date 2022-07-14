import { gql } from '@apollo/client';

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

export const ADD_BUDGET = gql`
  mutation addBudget($budgetText: String!) {
    addBudget(thoughtText: $thoughtText) {
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


export const REMOVE_USER = gql`
  mutation removeFriend($id: ID!) {
    removeFriend(id: $id) {
      _id
      username
      friends {
        _id
        username
      }
    }
  }
`;

// add UPDATE_USER somthing

/*
export const GET_PAYMENT_URL = gql`
  mutation getPaymentUrl() {
    getPaymentUrl() {
      url
    }
  }
`;*/
import React from 'react';
import Header  from './pages/Header';
import Balance  from './pages/Balance';
import IncomeExpenses from './pages/IncomeExpenses';
import Chart from "./pages/Chart";
import Footer from './pages/Footer';
import login from "./pages/Login";
import sidebar from "./pages/Sidebar";
import modifyBudget from "./pages/ModifyBudget";

import './App.css';
// import Sidebar from './components/pages/Sidebar';

import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client= {client}>
      <Router>
      <Header/>
      </Router>
    </ApolloProvider>
      
  );
}

export default App;


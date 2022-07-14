import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Header  from './components/pages/Header';
import Balance  from './components/pages/Balance';
import IncomeExpenses from './components/pages/IncomeExpenses';
import Chart from "./components/pages/Chart";
import Footer from './components/pages/Footer';
import './App.css';

// import Sidebar from './components/pages/Sidebar';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <body class="d-flex flex-column min-vh-100" id="App">
        <div class="container pt-5">
          <Header />
          <div class="py-5" id="page-wrap">
            <Balance />
            <IncomeExpenses />
            <Chart />
        {/* <ModifyBudget /> */}
        </div>
        <Footer />
    </div>
    </body>
    </Router>
  </ApolloProvider>
  );
}

export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
    ApolloClient,
InMemoryCache,
ApolloProvider,
createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NoMatch from './pages/NoMatch';

const httpLink = createHttpLink({
    uri: 'http://localhost:3001/graphql',
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
    <ApolloProvider client={client}>
        <Router>
        <div className="flex-column justify-content-center min-100-vh">
            <Header />
            <div className="container justify-content-center">
            <Routes>               
                <Route 
                path="/home" 
                element={<Home />} 
                />
                <Route 
                path="/" 
                element={<Login />} 
                />
                <Route 
                path="/signup" 
                element={<Signup />} 
                />
                <Route 
                path="*"
                element={< NoMatch />} 
                />
            </Routes>
            </div>
            <Footer />
        </div>
        </Router>
      </ApolloProvider>
    );
  }
  
  export default App;
import React from 'react';
import  Header  from './components/pages/Header';
import Balance  from './components/pages/Balance';
import IncomeExpenses from './components/pages/IncomeExpenses';
import Chart from "./components/pages/Chart";
import Footer from './components/pages/Footer';
import './App.css';

function App() {
  
  return (
      <body class="d-flex flex-column min-vh-100">
        <div class="container pt-5">
        <Header />
          <div class="py-5">
            <Balance />
            <IncomeExpenses />
            <Chart />
        {/* <ModifyBudget /> */}
        <Balance />
        <IncomeExpenses />
        </div>
        <Footer />
    </div>
    </body>
  );
}

export default App;


import React from 'react';
import  Header  from './components/pages/Header';
import Balance  from './components/pages/Balance';
import IncomeExpenses from './components/pages/IncomeExpenses';
// import Chart from "./components/pages/Chart";

import './App.css';

function App() {
  
  return (
    
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        {/* <Chart /> */}
        {/* <ModifyBudget /> */}
      </div>
    </div>
  );
}

export default App;


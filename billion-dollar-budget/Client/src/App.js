import React from 'react';
import  Header  from './components/pages/Header';
import Balance  from './components/pages/Balance';
import IncomeExpenses from './components/pages/IncomeExpenses';
import GraphRender from './components/pages/GraphRender';
// import ModifyBudget from './components/pages/ModifyBudget';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <GraphRender />
        {/* <ModifyBudget /> */}
      </div>
    </div>
  );
}

export default App;

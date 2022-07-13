import React from 'react';
import  Header  from './components/pages/Header';
import Balance  from './components/pages/Balance';
import IncomeExpenses from './components/pages/IncomeExpenses';
import Chart from "./components/pages/Chart";
import Footer from './components/pages/Footer';
import './App.css';
// import Sidebar from './components/pages/Sidebar';

function App() {
  return (
      <body class="d-flex flex-column min-vh-100" id="App">
        <div class="container pt-5">
          <Header />
          <div class="py-5" id="page-wrap">
            <Balance />
            {/* <IncomeExpenses /> */}
            <Chart />
        {/* <ModifyBudget /> */}
        </div>
        <Footer />
    </div>
    </body>
  );
}

export default App;


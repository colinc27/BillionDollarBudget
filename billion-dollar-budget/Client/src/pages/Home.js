import React from 'react';
import  Header  from './components/Header/index.js';
import Balance  from './components/Balance/index.js';
import IncomeExpenses from './components/IncomeExpenses/index.js';
import Chart from "./components/Chart/index.js";
import Footer from './components/Footer/index.js';
import './App.css';
// import Sidebar from './components/pages/Sidebar';
function Home() {
  return (
      <body class="d-flex flex-column min-vh-100" id="App">
        <div class="container pt-5">
          <Header />
          <div class="py-5" id="page-wrap">
            <Balance />
            <IncomeExpenses />
            {/* <IncomeExpenses /> */}
            <Chart />
        {/* <ModifyBudget /> */}
        </div>
        <Footer />
    </div>
    </body>
  );
}
export default Home;


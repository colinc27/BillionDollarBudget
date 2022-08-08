import React from "react";
import Header from "../components/Header";
import IncomeExpenses from "../components/IncomeExpenses";
import Footer from "../components/Footer";
import "../styles/Home.css";
import Logout from "../components/Logoutbtn";

function Home() {
  return (
    <body class="d-flex flex-column min-vh-100" id="App">
      <div class="container pt-5">
        <Header />
        <div class="py-5" id="page-wrap">
          <IncomeExpenses />
          {/* <ModifyBudget /> */}
          <Logout />
        </div>
        <Footer />
      </div>
    </body>
  );
}
export default Home;

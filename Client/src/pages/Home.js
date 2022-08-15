import React from "react";
import Header from "../components/Header";
import IncomeExpenses from "../components/IncomeExpenses";
import Footer from "../components/Footer";
import "../styles/Home.css";
import Logout from "../components/Logoutbtn";

function Home() {
  return (
    <body className="d-flex flex-column min-vh-100" id="App">
      <div className="container pt-5">
        <Header />
        <div className="py-5" id="page-wrap">
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

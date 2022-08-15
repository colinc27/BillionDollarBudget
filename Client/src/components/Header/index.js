import React from "react";
// import 'react-bootstrap'
import Sidebar from "../Sidebar";
import "../../App.css";

const Header = () => {
  /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
  return (
    <header className="fixed-top bg-success bg-gradient text-center text-white py-1">
      <div className="flex-row">
        <h1 className="">B$B</h1>
        <Sidebar />
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
// import 'react-bootstrap'
import Sidebar from '../Sidebar';

const Header = () => {

  /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
  return (
    <header class="fixed-top bg-success bg-gradient text-center text-white py-1">
      <div class= "flex-row">
      <h1 class="">
      B$B
      </h1>
      <Sidebar />
    </div>
    </header>

  )
}

export default Header
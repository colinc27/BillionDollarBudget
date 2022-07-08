import React from 'react'
import { slide as Menu } from 'react-burger-menu';

const Header = () => {
  /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
  return (
    <header class="fixed-top bg-success bg-gradient text-center text-white py-1 flex-row">
      <h1 class="">
      B$B
      </h1>
      <Menu>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/laravel">
        Laravel
      </a>

      <a className="menu-item" href="/angular">
        Angular
      </a>

      <a className="menu-item" href="/react">
        React
      </a>

      <a className="menu-item" href="/vue">
        Vue
      </a>

      <a className="menu-item" href="/node">
        Node
      </a>
    </Menu>
    </header>

  )
}

export default Header

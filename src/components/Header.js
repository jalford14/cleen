import React from 'react';
import './css/Header.css'

class Header extends React.Component {
  render() {
    return (
      <div class="navbar">
        <a class="home" href="localhost:3000">Cleen</a>

        <a class="nav push" href="localhost:3000">About</a>
        <a class="nav" href="localhost:3000">Get Started!</a>
      </div>
    );
  }
}

export default Header;

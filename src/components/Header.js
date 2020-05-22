import React from 'react';
import './css/Header.css'

class Header extends React.Component {
  render() {
    return (
      <div class="navbar">
        <a class="home" href="#">Cleen</a>

        <a class="nav" href="#">About</a>
        <a class="nav" href="#">Get Started!</a>
      </div>
    );
  }
}

export default Header;

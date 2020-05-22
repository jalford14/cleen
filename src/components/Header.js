import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css'

class Header extends React.Component {
  render() {
    return (
      <div class="navbar">
        <Link to="/" class="home">Cleen</Link>

        <Link to="/about" class="nav push">About</Link>
        <Link to="/basic" class="nav">Get Started!</Link>
      </div>
    );
  }
}

export default Header;

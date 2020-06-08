import React from "react";
import { Link } from "react-router-dom";
import "./css/Header.css"

class Header extends React.Component {
  render() {
    return (
      <div>
        <div class="navbar">
          <Link to="/" class="home-icon">CLEEN</Link>

          <Link to="/about" class="nav push">About</Link>
        </div>
        <div class="navbar-border"></div>
      </div>
    );
  }
}

export default Header;

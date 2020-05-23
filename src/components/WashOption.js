import React from 'react';
import './css/WashOption.css'
import WashForm from './WashForm'
import { Link, Switch, Route } from "react-router-dom";

class WashOption extends React.Component {
  render() {
    return (
      <div class="content-box" style={{background: this.props.color}}>
        <Link
          to={{
            pathname: "/form",
            state: {initialColor: this.props.color}
          }}
        >
          <p class="price">{this.props.price}</p>
          <p class="title">{this.props.title}</p>
          <p class="description">{this.props.description}</p>
        </Link>
      </div>
    );
  }
}

export default WashOption;

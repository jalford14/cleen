import React from 'react';
import './css/WashOption.css'
import WashForm from './WashForm'
import { Link, Switch, Route } from "react-router-dom";

class WashOption extends React.Component {
  getTitle(title) {
    switch(title) {
      case "Basic Wash":
        return "basic";
        break;
      case "On-Demand Wash":
        return "pro";
        break;
      case "Interior Detailing":
        return "interior";
        break;
      case "The Full Works":
        return "full-works";
        break;
    }
  }

  render() {
    return (
      <div class="content-box" style={{background: this.props.color}}>
        <Link
          to={{
            pathname: "/form",
            state: {
              initialColor: this.props.color,
              initialWashOption: this.getTitle(this.props.title)
            }
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

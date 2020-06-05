import React from 'react';
import './css/WashOption.css'
import { Link } from "react-router-dom";

class WashOption extends React.Component {
  getTitle(title) {
    switch(title) {
      case "Basic Wash":
        return "basic";
      case "On-Demand Wash":
        return "pro";
      case "Interior Detailing":
        return "interior";
      case "The Full Works":
        return "full-works";
      default:
        return "basic";
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

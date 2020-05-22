import React from 'react';
import './css/WashOption.css'

class WashOption extends React.Component {
  render() {
    return (
      // Structure:
      // 1. Big font: Price
      // 2. Description of wash
      //
      // Example:
      //       $10
      //    Basic Wash
      // Come to our house and
      // we'll wash for you!

      <div class="content-box">
        <h1>{this.props.price}</h1>
        <h2>{this.props.title}</h2>
        <h3>{this.props.description}</h3>
      </div>
    );
  }
}

export default WashOption;

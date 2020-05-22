import React from 'react';
import './css/WashOption.css'

class WashOption extends React.Component {
  render() {
    return (
      <div class="content-box" style={{background: this.props.color}}>
        <a href="localhost:3000">
          <p class="price">{this.props.price}</p>
          <p class="title">{this.props.title}</p>
          <p class="description">{this.props.description}</p>
        </a>
      </div>
    );
  }
}

export default WashOption;

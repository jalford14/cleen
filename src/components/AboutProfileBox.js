import React from "react";
import "../components/css/AboutProfileBox.css"

class AboutProfileBox extends React.Component {
  render() {
    return(
      <div class="profile-box" style={{background: this.props.color}}>
        <div class="img-container">
          <img src={this.props.picture} alt="Cleen employee"/>
        </div>
        <div class="person-container">
          <div class="person-name">
            {this.props.name}
          </div>
          <div class="person-description">
            {this.props.description}
          </div>
        </div>
      </div>
    );
  }
}

export default AboutProfileBox;

import React from "react";
import "../components/css/About.css"

class About extends React.Component {
  render() {
    return(
      <div class="about-container">
        <div class="about-header">
          About Us
        </div>
        
        <div class="profile-box">
          <div class="img-container">
            <img src={require("../assets/img/jimmy.jpeg")} />
          </div>
          <div class="person-container">
            <div class="person-name">
              Jimmy Alford
            </div>
            <div class="person-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut pharetra sit amet aliquam id diam maecenas ultricies.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

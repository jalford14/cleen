import React from "react";
import "../components/css/About.css"

class About extends React.Component {
  render() {
    return(
      <div>
        <div class="form-header">
          About Us
        </div>
        
        <div class="profile-box">
          <div class="img-container">
            <img src={require("../assets/img/jimmy.jpeg")} />
          </div>
        </div>
      </div>
    );
  }
}

export default About;

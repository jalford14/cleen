import React from "react";
import AboutProfileBox from "../components/AboutProfileBox.js"
import "../components/css/About.css"

import rachel from "../assets/img/rachel.jpeg"
import jimmy from "../assets/img/jimmy.jpeg"

class About extends React.Component {
  render() {
    return(
      <div class="about-container">
        <div class="about-header">
          About Us
        </div>
        <AboutProfileBox
          color="#FA8C9C"
          picture={rachel}
          name="Rachel Alford"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut pharetra sit amet aliquam id diam maecenas ultricies. Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Est sit amet facilisis magna etiam tempor orci. Gravida cum sociis natoque penatibus et magnis dis parturient montes. Sit amet mattis vulputate enim nulla. Porttitor leo a diam sollicitudin tempor. A iaculis at erat pellentesque. Morbi tristique senectus et netus et malesuada fames ac turpis. At urna condimentum mattis pell"
        />
        <AboutProfileBox
          color="#FA8C9C"
          picture={rachel}
          name="Lauren Hunter"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut pharetra sit amet aliquam id diam maecenas ultricies. Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Est sit amet facilisis magna etiam tempor orci. Gravida cum sociis natoque penatibus et magnis dis parturient montes. Sit amet mattis vulputate enim nulla. Porttitor leo a diam sollicitudin tempor. A iaculis at erat pellentesque. Morbi tristique senectus et netus et malesuada fames ac turpis. At urna condimentum mattis pell"
        />
        <AboutProfileBox
          color="#FA8C9C"
          picture={jimmy}
          name="Jimmy Alford"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut pharetra sit amet aliquam id diam maecenas ultricies. Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Est sit amet facilisis magna etiam tempor orci. Gravida cum sociis natoque penatibus et magnis dis parturient montes. Sit amet mattis vulputate enim nulla. Porttitor leo a diam sollicitudin tempor. A iaculis at erat pellentesque. Morbi tristique senectus et netus et malesuada fames ac turpis. At urna condimentum mattis pell"
        />
      </div>
    );
  }
}

export default About;

import React from "react";
import "./css/WashForm.css"
import axios from "axios";
import { Link, Switch, Route } from "react-router-dom";

class WashForm extends React.Component {
  handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const notes = document.getElementById("notes").value;
        axios({
            method: "POST",
            url:"http://localhost:5000/send",
            data: {
                name: name,
                email: email,
                phone: phone,
                notes: notes
            }
        }).then((response)=>{
            if (response.data.msg === "success"){
                alert("Message Sent.");
                this.resetForm()
            } else if(response.data.msg === "fail"){
                alert("Message failed to send.")
            }
        })
    }

  resetForm(){
        document.getElementById("contact-form").reset();
    }

  render() {
    return (
      <div class="form-container">
        <p class="form-header">Contact Us</p>

        <form class="wash-form" id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <label class="form-control" />
            <span class="form-label">Name *</span>
              <input class="form-input" id="name" type="text" />
      
          <label class="form-control" />
            <span class="form-label">Email *</span>
              <input class="form-input" id="email" type="text" />

          <label class="form-control" />
            <span class="form-label">Phone</span>
              <input class="form-input" id="phone" type="text" />

          <label class="form-control" />
            <span class="form-label">Additional Notes</span>
              <textarea class="form-textarea" id="notes" />

          <input class="form-submit" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default WashForm;

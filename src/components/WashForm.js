import React from "react";
import "./css/WashForm.css"
import axios from "axios";

class WashForm extends React.Component {
  constructor() {
    super();
    this.state = {
      dropdownColor: "rgba(22,52,95,0.2)",
    };
  }

  componentDidMount() {
    const { initialColor } = this.props.location.state

    this.setState({dropdownColor: initialColor});
  }

  selectedTitle() {
    return this.props.location.state.initialWashOption;
  }

  updateColor() {
    var value = document.getElementById("type").value;
    this.chooseColor(value);
  }

  chooseColor(value) {
    switch(value) {
      case "basic":
        this.setState({dropdownColor: "#6AE6C9"});
        break;
      case "pro":
        this.setState({dropdownColor: "#75C2E6"});
        break;
      case "interior":
        this.setState({dropdownColor: "#FA8C9C"});
        break;
      case "full-works":
        this.setState({dropdownColor: "#FAB05A"});
        break;
    }
  }

  handleSubmit(e){
        e.preventDefault();
        const type = document.getElementById("type").value;
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const notes = document.getElementById("notes").value;
        axios({
            method: "POST",
            url:"http://localhost:5000/send",
            data: {
                type: type,
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
            <span class="form-label">Type of Wash *</span>
              <select class="form-dropdown" id="type" 
                      onChange={this.updateColor.bind(this)} 
                      style={{backgroundColor: this.state.dropdownColor}}
              >
                <option value="basic" selected={this.selectedTitle() == "basic" && "selected"}>Basic Wash</option>
                <option value="pro" selected={this.selectedTitle() == "pro" && "selected"}>On-Demand Wash</option>
                <option value="interior" selected={this.selectedTitle() == "interior" && "selected"}>Interior Detailing</option>
                <option value="full-works" selected={this.selectedTitle() == "full-works" && "selected"}>The Full Works</option>
              </select>

          <label class="form-control" />
            <span class="form-label">Name *</span>
              <input class="form-input" id="name" type="text" required/>
      
          <label class="form-control" />
            <span class="form-label">Email *</span>
              <input class="form-input" id="email" type="text" required/>

          <label class="form-control" />
            <span class="form-label">Phone</span>
              <input class="form-input" id="phone" type="text" />

          <label class="form-control" />
            <span class="form-label">Additional Notes</span>
              <textarea class="form-textarea" id="notes" 
                placeholder="Anything important to know? Want a second car cleaned? Let us know here!"
              />

          <input class="form-submit" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default WashForm;

import React from 'react';
import './css/WashForm.css'
import { Link, Switch, Route } from "react-router-dom";

class WashForm extends React.Component {
  render() {
    return (
      <div class="form-container">
        <p class="form-header">Contact Us</p>

        <form class="wash-form">
          <label class="form-control" />
            <span class="form-label">Name *</span>
              <input class="form-input" type="text" />
      
          <label class="form-control" />
            <span class="form-label">Email *</span>
              <input class="form-input" type="text" />

          <label class="form-control" />
            <span class="form-label">Phone</span>
              <input class="form-input" type="text" />

          <label class="form-control" />
            <span class="form-label">Additional Notes</span>
              <textarea class="form-textarea" />

          <input class="form-submit" type="submit" value="Submit" />

        </form>
      </div>
    );
  }
}

export default WashForm;

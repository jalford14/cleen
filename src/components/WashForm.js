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
              <input type="text" />
          <label class="form-control" />
            <span class="form-label">Email *</span>
              <input type="text" />
          <label class="form-control" />
            <span class="form-label">Phone</span>
              <input type="text" />
          <label class="form-control" />
            <span class="form-label">Notes</span>
              <textarea class="form-textarea" />
        </form>
      </div>
    );
  }
}

export default WashForm;

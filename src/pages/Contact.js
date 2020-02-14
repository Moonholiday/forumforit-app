import React, { Component } from "react";
import axios from "axios";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.contactMessage = this.contactMessage.bind(this);
    this.state = {};
  }
  contactMessage(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3001/contact", {
        title: document.getElementById("subject").value,
        email: document.getElementById("email").value,
        body: document.getElementById("body").value
      })
      .then(res => {
        console.log(this.state);
      })
      .catch(error => {
        alert("error!");
      });
  }

  render() {
    return (
      <>
        <div className="page-title">
          <h2>Contact Us</h2>
        </div>
        <div className="outer-block">
          <form className="block" method="post" onSubmit={this.contactMessage}>
            <p>
              <label for="subject">Title </label>
              <input type="text" id="subject" autoComplete="off" required />
            </p>
            <p>
              <label for="email">Email </label>
              <input type="email" id="email" autoComplete="off" required />
            </p>
            <p>
              <label for="body">Body </label>
              <textarea id="body" required rows="10" />
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
      </>
    );
  }
}

export default Contact;

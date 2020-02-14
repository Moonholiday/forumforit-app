import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    if (localStorage.getItem("userInfo") === null) {
      localStorage.setItem("userInfo", JSON.stringify(this.state));
    } else {
      alert("you are already logged in!!");
    }
    event.target.reset();
  };
  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    });
  };
  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    });
  };
  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  };

  render() {
    return (
      <>
        <div className="page-title">
          <h2>Sign up</h2>
        </div>
        <div className="outer-block">
          <form onSubmit={this.handleSubmit} id="form" className="block">
            <p>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                autoComplete="off"
                required
                value={this.state.username}
                onChange={this.handleUsernameChange}
              />
            </p>
            <p>
              <label htmlFor="author">Email</label>
              <input
                type="email"
                autoComplete="off"
                required
                value={this.state.email}
                onChange={this.handleEmailChange}
              />
            </p>
            <p>
              <label htmlFor="Password">Password</label>
              <input
                type="password"
                minLength="8"
                required
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
            </p>
            <p>
              <button type="submit">
                <Link to="/">Sign up</Link>
              </button>
            </p>
          </form>
        </div>
      </>
    );
  }
}

export default SignUp;

import React, { Component } from "react";
import axios from "axios";

class Code extends Component {
  state = {
    code: []
  };
  componentDidMount() {
    axios.get("http://localhost:3001/code").then(response => {
      const code = response.data;
      this.setState({ code });
    });
  }

  render() {
    return (
      <>
        <div className="title">
          <h1>Programming, Coding, and Languages</h1>
        </div>

        <div id="content" className="content">
          <h2>Forum</h2>
          <br />
          {this.state.code.map(item => (
            <section className="title">
              <ul>{item.title}</ul>
            </section>
          ))}
        </div>
      </>
    );
  }
}
export default Code;

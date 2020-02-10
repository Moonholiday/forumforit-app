import React, { Component } from "react";
import axios from "axios";

class Web extends Component {
  state = {
    web: []
  };
  componentDidMount() {
    axios.get("http://localhost:3001/web").then(response => {
      const web = response.data;
      this.setState({ web });
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
          {this.state.web.map(item => (
            <section className="title">
              <ul>{item.title}</ul>
            </section>
          ))}
        </div>
      </>
    );
  }
}
export default Web;

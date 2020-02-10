import React, { Component } from "react";
import axios from "axios";

class Web extends Component {
  state = {
    post: []
  };
  componentDidMount() {
    axios.get("http://localhost:3001/post").then(response => {
      this.setState({ post: response.data });
    });
  }

  render() {
    return (
      <>
        <div className="content" id="content">
          <h1>Webmasters</h1>
        </div>
        <div className="content">
          <div className="title">
            <h2>Forum</h2>
          </div>
          <section className="title">
            <h3>Website Construction</h3>
            <ul>
              {this.state.post.map(item => (
                <li>{item.gfx.title}</li>
              ))}
            </ul>
          </section>
        </div>
      </>
    );
  }
}

export default Web;

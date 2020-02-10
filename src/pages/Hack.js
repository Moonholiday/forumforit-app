import React, { Component } from "react";
import axios from "axios";

class Hack extends Component {
  state = {
    post: []
  };
  componentWillMount() {
    axios.get("http://localhost:3003/posts").then(response => {
      const post = response.data;
      this.setState({ post });
    });
  }

  render() {
    return (
      <>
        <div className="content" id="content">
          <h1>Hacks</h1>
        </div>
        <div className="content">
          {this.state.post.map(post => (
            <section className="title">{post.title}</section>
          ))}
        </div>
      </>
    );
  }
}

export default Hack;

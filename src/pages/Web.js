import React, { Component } from "react";
import axios from "axios";

class Web extends Component {
  state = {
    post: []
  };
  componentDidMount() {
    axios.get("http://localhost:3001/posts").then(response => {
      const post = response.data;
      this.setState({ post });
    });
  }

  render() {
    return (
      <>
        <ul>
          {this.state.post.map(post => (
            <li>{post.title}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default Web;

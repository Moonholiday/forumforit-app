import React, { Component } from "react";
import axios from "axios";

class Tools extends Component {
  state = {
    tools: []
  };
  componentDidMount() {
    axios
      .get("http://localhost:3001/tools")
      .then(response => {
        this.setState({ tools: response.data });
      })
      .catch(error => {
        console.log("Error!!");
      });
  }

  render() {
    return (
      <>
        <div className="page-title">
          <h1>Programming </h1>
        </div>
        <div id="content" className="outer-block">
          <h2>Forum</h2>
          {this.state.tools.map(item => (
            <section className="block">
              <ul>
                <h3 className="block-title">{item.title}</h3>
                <p>{item.body}</p>
              </ul>
            </section>
          ))}
        </div>
      </>
    );
  }
}

export default Tools;

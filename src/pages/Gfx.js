import React, { Component } from "react";
import axios from "axios";

class Gfx extends Component {
  state = {
    gfx: []
  };
  componentDidMount() {
    axios
      .get("http://localhost:3001/gfx")
      .then(response => {
        this.setState({ gfx: response.data });
      })
      .catch(error => {
        console.log("Error!!");
      });
  }

  render() {
    return (
      <>
        <div className="title">
          <h1>Graphics</h1>
        </div>
        <div id="content" className="content">
          {this.state.gfx.map(item => (
            <section className="title">
              <ul>{item.title}</ul>
            </section>
          ))}
        </div>
      </>
    );
  }
}

export default Gfx;

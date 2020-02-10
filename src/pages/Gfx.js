import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
          <h2>Forum</h2>
          {this.state.gfx.map(item => (
            <section className="title">
              <Link to>{item.title}</Link>
            </section>
          ))}
        </div>
      </>
    );
  }
}

export default Gfx;

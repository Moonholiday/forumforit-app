import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Hack extends Component {
  state = {
    hack: []
  };
  componentDidMount() {
    axios
      .get("http://localhost:3001/hack")
      .then(response => {
        this.setState({ hack: response.data });
      })
      .catch(error => {
        console.log("Error!!");
      });
  }

  render() {
    return (
      <>
        <div className="title">
          <h1>Hacks and exploits</h1>
        </div>
        <div id="content" className="content">
          <h2>Forum</h2>
          {this.state.hack.map(item => (
            <section className="title">
              <Link to>{item.title}</Link>
            </section>
          ))}
        </div>
      </>
    );
  }
}

export default Hack;

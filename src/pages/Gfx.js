import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

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
        <Nav />
        <div className="page-title">
          <h1>Graphics</h1>
        </div>
        <div id="content" className="outer-block ">
          <div className="forum">
            <Link to="/create-thread">
              <button>Create new thread</button>
            </Link>
            <h2>Forum</h2>
          </div>
          {this.state.gfx.map(item => (
            <section className="block ">
              <h3>{item.title}</h3>
              <h5>{item.author}</h5>
              <p>{item.body}</p>
            </section>
          ))}
        </div>
      </>
    );
  }
}

export default Gfx;

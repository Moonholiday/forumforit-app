import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Web extends Component {
  state = {
    web: []
  };
  componentDidMount() {
    axios
      .get("http://localhost:3001/web")
      .then(response => {
        this.setState({ web: response.data });
      })
      .catch(error => {
        console.log("Error!!");
      });
  }

  render() {
    return (
      <>
        <div className="page-title">
          <h1>Webmasters</h1>
        </div>
        <div id="content" className="outer-block">
          <h2>Forum</h2>
          {this.state.web.map(item => (
            <section className="block">
              <ul>
                <h3 className="block-title">{item.title}</h3>
                <h5>{item.author}</h5>
                <p>{item.body}</p>
              </ul>
            </section>
          ))}
          <Link to="/create-thread">
            <button>Create new thread</button>
          </Link>
        </div>{" "}
      </>
    );
  }
}

export default Web;

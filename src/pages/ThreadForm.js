import React, { Component } from "react";
import axios from "axios";

class ThreadForm extends Component {
  constructor(props) {
    super(props);
    this.uploadArticle = this.uploadArticle.bind(this);
    this.state = {};
  }

  uploadArticle(e) {
    e.preventDefault();
    if (document.getElementById("genre").value === "code") {
      axios
        .post("http://localhost:3001/code", {
          title: document.getElementById("title").value,
          author: document.getElementById("author").value,
          body: document.getElementById("body").value
        })
        .then(res => {
          console.log(this.state);
        })
        .catch(error => {
          alert("error!");
        });
    } else if (document.getElementById("genre").value === "gfx") {
      axios
        .post("http://localhost:3001/gfx", {
          title: document.getElementById("title").value,
          author: document.getElementById("author").value,
          body: document.getElementById("body").value
        })
        .then(res => {
          console.log(this.state);
        })
        .catch(error => {
          alert("error!");
        });
    } else if (document.getElementById("genre").value === "hack") {
      axios
        .post("http://localhost:3001/hack", {
          title: document.getElementById("title").value,
          author: document.getElementById("author").value,
          body: document.getElementById("body").value
        })
        .then(res => {
          console.log(this.state);
        })
        .catch(error => {
          alert("error!");
        });
    } else if (document.getElementById("genre").value === "web") {
      axios
        .post("http://localhost:3001/web", {
          title: document.getElementById("title").value,
          author: document.getElementById("author").value,
          body: document.getElementById("body").value
        })
        .then(res => {
          console.log(this.state);
        })
        .catch(error => {
          alert("error!");
        });
    }

    e.target.reset();
  }

  render() {
    return (
      <>
        <div className="outer-block">
          <h1>Create a new thread.</h1>
          <p>{this.state.success}</p>
          <p>{this.state.error}</p>
          <form className="block" method="post" onSubmit={this.uploadArticle}>
            <p>
              <label for="genre">Genre: </label>
              <select id="genre">
                <option value="code">Code</option>
                <option value="gfx">Gfx</option>
                <option value="hack">Hack</option>
                <option value="web">Web</option>
              </select>
            </p>
            <p>
              <label for="title">Title: </label>
              <input type="text" id="title" required />
            </p>
            <p>
              <label for="author">Author: </label>
              <input type="text" id="author" required />
            </p>
            <p>
              <label for="body">Body: </label>
              <textarea id="body" required rows="10" />
            </p>

            <p>
              <button type="submit">Post</button>
            </p>
          </form>
        </div>
      </>
    );
  }
}

export default ThreadForm;

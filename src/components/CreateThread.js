import React, { Component } from "react";
import axios from "axios";

class CreateThread extends Component {
  constructor(props) {
    super(props);
    this.newThread = this.newThread.bind(this);
    this.state = {
      success: "",
      error: ""
    };
  }

  newThread(e) {
    e.preventDefault();
    if (document.getElementById("genre").value == "code") {
      axios
        .post("http://localhost:3001/code", {
          title: document.getElementById("title").value,
          date: document.getElementById("date").value,
          author: document.getElementById("author").value,
          content: document.getElementById("content").value
        })
        .then(res => {
          this.setState({ success: "Thread has been added" });
        })
        .catch(error => {
          this.setState({ error: "Something went wrong!" });
        });
    } else if (document.getElementById("genre").value == "gfx") {
      axios
        .post("http://localhost:3001/gfx", {
          title: document.getElementById("title").value,
          date: document.getElementById("date").value,
          author: document.getElementById("author").value,
          content: document.getElementById("content").value
        })
        .then(res => {
          this.setState({ success: "Thread has been added" });
        })
        .catch(error => {
          this.setState({ error: "Something went wrong!" });
        });
    } else if (document.getElementById("genre").value == "hack") {
      axios
        .post("http://localhost:3001/hack", {
          title: document.getElementById("title").value,
          date: document.getElementById("date").value,
          author: document.getElementById("author").value,
          content: document.getElementById("content").value
        })
        .then(res => {
          this.setState({ success: "Thread has been added" });
        })
        .catch(error => {
          this.setState({ error: "Something went wrong!" });
        });
    } else if (document.getElementById("genre").value == "web") {
      axios
        .post("http://localhost:3001/web", {
          title: document.getElementById("title").value,
          date: document.getElementById("date").value,
          author: document.getElementById("author").value,
          content: document.getElementById("content").value
        })
        .then(res => {
          this.setState({ success: "Thread has been added" });
        })
        .catch(error => {
          this.setState({ error: "Something went wrong!" });
        });
    }

    e.target.reset();
  }

  render() {
    return (
      <>
        <div className="content">
          <h1>Create new thread</h1>
          <p>{this.state.success}</p>
          <p>{this.state.error}</p>
          <form method="post" onSubmit={this.newThread}>
            <label for="genre">Choose a genre you want to post on:</label>

            <select id="genre">
              <option value="code">Code</option>
              <option value="gfx">Gfx</option>
              <option value="hack">Hack</option>
              <option value="web">Web</option>
            </select>
            <p>
              <label for="title">Title: </label>
              <input type="text" id="title" />
            </p>
            <p>
              <label for="date">Post Date: </label>
              <input type="date" id="date" />
            </p>
            <p>
              <label for="author">Author: </label>
              <input type="text" id="author" />
            </p>
            <p>
              <label for="content">Content: </label>
              <textarea id="content"></textarea>
            </p>
            <p>
              <button type="submit">Submit</button>
            </p>
          </form>
        </div>
      </>
    );
  }
}

export default CreateThread;

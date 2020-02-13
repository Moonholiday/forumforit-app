import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class SearchList extends Component {
  constructor(props) {
    super();
    this.state = {
      query: "",
      results: {},
      message: ""
    };
  }
  fetchSearchResults = query => {
    let one = `http://localhost:3001/code?q=${query}`;
    let two = `http://localhost:3001/gfx?q=${query}`;
    let three = `http://localhost:3001/hack?q=${query}`;
    let four = `http://localhost:3001/web?q=${query}`;
    const reqOne = axios.get(one);
    const reqTwo = axios.get(two);
    const reqThree = axios.get(three);
    const reqFour = axios.get(four);
    axios
      .all([reqOne, reqTwo, reqThree, reqFour])
      .then(
        axios.spread((...reses) => {
          const resOne = reses[0];
          const resTwo = reses[1];
          const resThree = reses[3];
          const resFour = reses[4];
          const temp = resOne.data.concat(
            resTwo.data,
            resThree.data,
            resFour.data
          );
          console.log(temp);
        })
      )
      .catch(error => {
        if (axios.isCancel(error) || error) {
          this.setState({ message: "Failed to fetch the data" });
        }
      });
  };
  renderSearchResults() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }

  handleOnInputChange = event => {
    const query = event.target.value;
    this.setState({ query, message: "" }, () => {
      this.fetchSearchResults(query);
    });
  };

  render() {
    const { query } = this.state;
    return (
      <>
        <div className="searchBar">
          <input
            id="search-input"
            type="text"
            name="searchBar"
            value={query}
            placeholder="Search"
            onChange={this.handleOnInputChange}
          />
          {this.renderSearchResults}
        </div>
      </>
    );
  }
}
export default SearchList;

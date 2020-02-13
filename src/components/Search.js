import React, { Component } from "react";
import axios from "axios";

class Search extends Component {
  constructor(props) {
    super();
    this.state = {
      query: "",
      results: {},
      message: ""
    };
    this.cancel = "";
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
          console.log(
            reses[0].data,
            reses[1].data,
            reses[2].data,
            reses[3].data
          );
        })
      )
      .catch(error => {
        if (axios.isCancel(error) || error) {
          this.setState({ message: "Failed to fetch the data" });
        }
      });
  };
  handleOnInputChange = event => {
    const query = event.target.value;
    this.setState({ query, message: "" }, () => {
      this.fetchSearchResults(query);
    });
  };

  render() {
    const { query } = this.state;
    return (
      <div className="searchBar">
        <input
          id="search-input"
          type="text"
          name="searchBar"
          value={query}
          placeholder="Search"
          onChange={this.handleOnInputChange}
        />
        <button>
          <img src="images/search.png" alt="search" />
        </button>
      </div>
    );
  }
}
export default Search;

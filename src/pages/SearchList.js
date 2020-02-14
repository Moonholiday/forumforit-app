import React, { Component } from "react";
import axios from "axios";

class SearchList extends Component {
  constructor(props) {
    super();
    this.state = {
      query: "",
      results: {},
      message: "No results for the given search"
    };
  }
  fetchSearchResults = query => {
    let one = `http://localhost:3001/code?q=${query}`;
    let two = `http://localhost:3001/gfx?q=${query}`;
    let three = `http://localhost:3001/hack?q=${query}`;
    let four = `http://localhost:3001/web?q=${query}`;
    let reqOne = axios.get(one);
    let reqTwo = axios.get(two);
    let reqThree = axios.get(three);
    let reqFour = axios.get(four);
    axios
      .all([reqOne, reqTwo, reqThree, reqFour])
      .then(
        axios.spread((...reses) => {
          let resOne = reses[0];
          let resTwo = reses[1];
          let resThree = reses[2];
          let resFour = reses[3];
          // if (Array.isArray(resFour.data)) console.log("array");
          let results = resOne.data.concat(
            resTwo.data,
            resThree.data,
            resFour.data
          );
          this.setState({ results });
        })
      )
      .catch(error => {
        if (axios.isCancel(error) || error) {
          this.setState({ message: "Failed to fetch the data" });
        }
      });
  };

  renderSearchResults = () => {
    const { results } = this.state;
    // if (Array.isArray(this.state.results)) console.log("array");
    if (Object.keys(results).length && results.length) {
      return (
        <div className="outer-block">
          {this.state.results.map(item => {
            return (
              <div className="block">
                <h3>{item.title}</h3>
                <h5>{item.author}</h5>
                <p>{item.body}</p>
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="outer-block">
          <h4 className="page-title">{this.state.message}</h4>
        </div>
      );
    }
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
        </div>
        {this.renderSearchResults()}
      </>
    );
  }
}
export default SearchList;

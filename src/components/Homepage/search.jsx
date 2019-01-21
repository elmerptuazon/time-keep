import React, { Component } from "react";
import "../../App.css";

class SearchFilter extends Component {
  render() {
    return (
      <div className="searchfilterbox">
        <label>Search</label>
        <input
          type="text"
          className="form-control"
          placeholder="search"
          autoFocus
        />
        <label>Sort</label>
        <input
          type="text"
          className="form-control"
          placeholder="sort"
          autoFocus
        />
      </div>
    );
  }
}

export default SearchFilter;

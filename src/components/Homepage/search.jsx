import React, { Component } from "react";
import "../../App.css";

class SearchFilter extends Component {
  render() {
    return (
      <div className="container">
        <div className="col">
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
        <div className="col">
          <input
            type="file"
            data-input-file-preview="image-preview"
            data-map-to-model="image.file"
          />
          <canvas id="image-preview" />
        </div>
      </div>
    );
  }
}

export default SearchFilter;

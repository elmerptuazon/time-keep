import React, { Component } from "react";
import NavBar from "./navbar";
import SearchFilter from "./search";
import Content from "./content";

class HomePage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <SearchFilter />
        <br />
        <Content />
      </div>
    );
  }
}

export default HomePage;

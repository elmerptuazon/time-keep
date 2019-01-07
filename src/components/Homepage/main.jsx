import React, { Component } from "react";
import NavBar from "./navbar";

class HomePage extends Component {
  render() {
    return (
      <div>
        <NavBar name={this.props.name} />
      </div>
    );
  }
}

export default HomePage;

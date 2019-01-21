import React, { Component } from "react";
import "../../App.css";

class Content extends Component {
  state = {
    images:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_TV_2015.svg?download"
  };

  render() {
    return (
      <div>
        <div className="contentcss">
          <img src={this.state.images} alt="sampleimage" />
          <figcaption>
            P<span>150.00</span>
          </figcaption>
          <figcaption>Item Name</figcaption>
        </div>
      </div>
    );
  }
}

export default Content;

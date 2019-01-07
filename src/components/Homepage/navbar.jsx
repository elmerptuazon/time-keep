import React, { Component } from "react";

class NavBar extends Component {
  state = {
    name: ""
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
          <p className="navbar-brand">Top navbar</p>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <p className="nav-link">
                  Home <span>(current)</span>
                </p>
              </li>
              <li className="nav-item">
                <p className="nav-link">Link</p>
              </li>
              <li className="nav-item">
                <p className="nav-link disabled">Disabled</p>
              </li>
            </ul>
            <h1>Welcome User {this.state.name}</h1>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;

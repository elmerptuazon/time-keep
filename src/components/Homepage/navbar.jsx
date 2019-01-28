import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {
    name: ""
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
          <p className="navbar-brand">Icon Here</p>
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
              <li className="nav-item">
                <NavLink to="/home">
                  <p className="nav-link">Home</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/profile">
                  <p className="nav-link">Profile</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/">
                  <p className="nav-link">Logout</p>
                </NavLink>
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

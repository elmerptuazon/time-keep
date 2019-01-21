import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Profile extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Profile Page</h1>
        <NavLink to="/home">
          <p className="nav-link">Go Back</p>
        </NavLink>
      </div>
    );
  }
}

export default Profile;

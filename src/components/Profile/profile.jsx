import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../Homepage/navbar";
import { FaEdit } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

class Profile extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <div className="col">
            <NavLink to="/home" className="btn btn-primary btn-lg">
              Go Back
            </NavLink>
          </div>
          <div className="col">
            <h3>
              Username
              <button className="btn">
                <FiUser />
              </button>
            </h3>
            <h4>
              Location
              <button className="btn">
                <FaEdit />
              </button>
            </h4>
          </div>
          <div className="row">
            <div className="col">Item Name</div>
            <div className="col">Price</div>
          </div>
          <div className="row">
            <div className="col">Ipad</div>
            <div className="col">20000</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;

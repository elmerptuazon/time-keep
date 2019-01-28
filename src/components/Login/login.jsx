import React, { Component } from "react";
import HomePage from "../Homepage/main";
import Profile from "../Profile/profile";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import "../../App.css";

const LoginUI = () => {
  return (
    <div className="container">
      <label htmlFor="inputEmail">Email address</label>
      <input
        type="email"
        id="inputEmail"
        className="form-control"
        placeholder="Email address"
        autoFocus
      />

      <label htmlFor="inputPassword">Password</label>
      <input
        type="password"
        id="inputPassword"
        className="form-control"
        placeholder="Password"
      />
      <NavLink to="/home" className="btn btn-primary btn-lg">
        Login
      </NavLink>
    </div>
  );
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    return HomePage;
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            path="/home"
            exact
            strict
            render={value => {
              return <HomePage />;
            }}
          />

          <Route
            path="/profile"
            exact
            strict
            render={value => {
              return <Profile />;
            }}
          />

          <Route path="/" exact strict component={LoginUI} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Login;

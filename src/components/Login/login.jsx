import React, { Component } from "react";
import HomePage from "../Homepage/main";
import { BrowserRouter, Route } from "react-router-dom";

const LoginUI = value => {
  return (
    <div>
      <label htmlFor="inputEmail">Email address</label>
      <input
        type="email"
        id="inputEmail"
        className="form-control"
        value={value}
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
              return <HomePage name="Jay" />;
            }}
          />

          <Route path="/" exact strict component={LoginUI} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Login;

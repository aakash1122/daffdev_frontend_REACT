import React, { Component } from "react";

export default class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      email: e.target.email.value,
      password: e.target.password.value
    });
    console.log(this.state);
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="container p-fixed mt-5">
        <h1 className="text-center">Login</h1>
        <hr className="w-25" />
        <form className="form-signin" onSubmit={this.onSubmit}>
          <label htmlFor="inputEmail">Email address</label>
          <div className="form-label-group">
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="someone@you.com"
              required={true}
              autoFocus=""
              name="email"
              onChange={this.onChange}
            />
          </div>

          <div className="form-label-group mt-2">
            <label htmlFor="inputPassword">Password</label>
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="********"
              required={true}
              name="password"
              onChange={this.onChange}
            />
          </div>
          <button
            className="btn btn-lg btn-primary btn-block mt-4"
            type="submit"
          >
            Sign in
          </button>
        </form>
      </div>
    );
  }
}

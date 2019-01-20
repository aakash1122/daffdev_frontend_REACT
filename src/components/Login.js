import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    redirectTo: null
  };

  onSubmit = e => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:5000/login",
        {
          email: this.state.email,
          password: this.state.password
        },
        { withCredentials: true }
      )
      .then(res => {
        if (res.status === 200) {
          this.props.toogleAuthentication(res.data);
          this.setState({
            ...this.state,
            redirectTo: "/"
          });
        }
      })
      .catch(err => console.log(err));
  };

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div className="container p-fixed mt-5">
          <h1 className="text-center">Login</h1>
          <hr className="w-25" />
          <form className="form-signin" onSubmit={this.onSubmit}>
            <label htmlFor="inputEmail">Email address</label>
            <div className="form-label-group">
              <input
                type="text"
                id="inputEmail"
                className="form-control"
                placeholder="someone@you.com"
                required={true}
                autoFocus=""
                name="email"
                onChange={this.onChangeHandler}
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
                onChange={this.onChangeHandler}
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
}

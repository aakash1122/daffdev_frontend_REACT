import React, { Component } from "react";
import axios from "axios";

export default class Signup extends Component {
  state = {
    email: "",
    password: "",
    username: ""
  };
  onSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/signup", this.state, {
        withCredentials: true
      })
      .then(res => {
        if (res.status === 200) {
          this.props.history.push("/login");
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
    return (
      <div>
        <div className="container p-fixed mt-5">
          <h1 className="text-center">Few Steps to get you started</h1>
          <hr className="w-25" />
          <form className="form-signin" onSubmit={this.onSubmit}>
            <div className="form-label-group mt-3">
              <input
                type="email"
                id="inputEmail"
                className="form-control"
                placeholder="Email address"
                required={true}
                autoFocus=""
                name="email"
                onChange={this.onChangeHandler}
              />
            </div>
            <div className="form-label-group mt-3">
              <input
                type="text"
                id="inputUsername"
                className="form-control"
                placeholder="User Name"
                required={true}
                autoFocus=""
                name="username"
                onChange={this.onChangeHandler}
              />
            </div>
            {/* <div className="form-label-group mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Image"
                required={true}
                name="image"
              />
            </div> */}
            <div className="form-label-group mt-3">
              <input
                type="password"
                id="inputPassword"
                className="form-control"
                placeholder="Password"
                required={true}
                name="password"
                onChange={this.onChangeHandler}
              />
            </div>

            <button
              className="btn btn-lg btn-primary btn-block mt-4"
              type="submit"
            >
              Sign Up
              <i className="fas fa-user-plus fa-1x ml-2" />
            </button>
          </form>
        </div>
      </div>
    );
  }
}

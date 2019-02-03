import React, { Component } from "react";
import axios from "axios";

export default class Signup extends Component {
  state = {
    email: "",
    password: "",
    username: "",
    userImage: null,
    error: null
  };
  onSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("userImage", this.state.userImage);
    formData.append("email", this.state.email);
    formData.append("username", this.state.username);
    formData.append("password", this.state.password);

    axios
      .post("http://localhost:5000/signup", formData, {
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

  fileChangeHandler = e => {
    if (e.target.files[0].size > 1048576) {
      this.setState({
        ...this.state,
        error: "File size is larger than 1Mb"
      });
    } else {
      this.setState(
        {
          ...this.state,
          userImage: e.target.files[0],
          error: ""
        },
        () => {
          console.log("updated : ", this.state);
        }
      );
    }
    console.log(e.target.files[0].size);
  };

  render() {
    return (
      <div>
        <div className="container p-fixed mt-5">
          <h1 className="text-center">Few Steps to get you started</h1>
          <hr className="w-25" />
          <form
            className="form-signin"
            onSubmit={this.onSubmit}
            encType="multipart/form-data"
          >
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
            <div className="form-label-group mt-3 mb-3">
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
            <label htmlFor="exampleFormControlFile1">
              Upload a profile picture
            </label>
            <input
              type="file"
              className="form-control-file"
              id="exampleFormControlFile1"
              name="userImage"
              accept="image/png, image/jpeg"
              size="1000000"
              onChange={this.fileChangeHandler}
            />
            <button
              className="btn btn-lg btn-primary btn-block mt-4"
              type="submit"
            >
              Sign Up
              <i className="fas fa-user-plus fa-1x ml-2" />
            </button>
            {this.state.error ? (
              <div className="alert alert-danger mt-2" role="alert">
                {this.state.error}
              </div>
            ) : null}
          </form>
        </div>
      </div>
    );
  }
}

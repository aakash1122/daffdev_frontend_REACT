import React, { Component } from "react";
import axios from "axios";

export default class AddPost extends Component {
  state = {
    title: "",
    postDetail: "",
    postImage: null,
    error: ""
  };

  submitHandler = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("postImage", this.state.postImage);
    formData.append("title", this.state.title);
    formData.append("postDetail", this.state.postDetail);
    if (!this.state.error) {
      axios
        .post("http://localhost:5000/post/new", formData, {
          withCredentials: true
        })
        .then(post => {
          console.log(post);
          this.props.history.push("/posts");
        })
        .catch(err => console.log(err));
    }
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
          postImage: e.target.files[0],
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
        <div className="p-fixed mt-5">
          <h1 className="text-center">Add a brand new Post</h1>
          <hr className="w-25" />
          <form
            className="form-signin"
            encType="multipart/form-data"
            onSubmit={this.submitHandler}
          >
            <div className="form-label-group mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Title goes here"
                required={true}
                autoFocus=""
                name="title"
                minLength={20}
                maxLength={85}
                onChange={this.onChangeHandler}
              />
            </div>
            <div className="form-group mt-3">
              <textarea
                className="form-control"
                rows="12"
                cols="20"
                name="postDetail"
                onChange={this.onChangeHandler}
                placeholder="Post Detail goes here"
              />
            </div>
            <label htmlFor="exampleFormControlFile1">Upload a picture</label>
            <input
              type="file"
              className="form-control-file"
              id="exampleFormControlFile1"
              name="postImage"
              accept="image/png, image/jpeg"
              size={1000000}
              onChange={this.fileChangeHandler}
            />
            <button
              className="btn btn-lg btn-primary btn-block mt-4"
              type="submit"
            >
              Publish
            </button>
          </form>
        </div>
      </div>
    );
  }
}

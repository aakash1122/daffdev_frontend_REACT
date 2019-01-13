import React, { Component } from "react";

export default class PostDetail extends Component {
  render() {
    const post = this.props.posts.find(post => {
      return post.id === parseInt(this.props.match.match.params.id);
    });
    console.log(post);
    return (
      <div className="container mt-3 post-detail-container">
        <img src={post.image} alt="" className="w-100 post-detail-image" />
        <div className="text-center">
          <h1>{post.title}</h1>
          <p>
            <b>Author Name</b>
          </p>
          <h5 className="text-left text-weight-light">{post.body}</h5>
          <p className="text-right text-wight-bold">{post.created}</p>
        </div>
      </div>
    );
  }
}

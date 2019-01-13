import React from "react";
import { Link } from "react-router-dom";

export default function PostFeed({ posts }) {
  const postList = posts.map(post => {
    return (
      <div className="post-card shadow d-flex w-75 mx-auto mb-4" key={post.id}>
        <div className="post-image">
          <img src={post.image} alt="" className="w-100 h-100 " />
        </div>
        <div className="post-body overflow-hidden p-3 flex-fill">
          <Link to={`posts/${post.id}`} style={{ textDecoration: "none" }}>
            <h3 className="post-title font-weight-bold">
              {post.title.slice(0, 25)}
            </h3>

            <p className="post-author text-dark">
              <i>
                <b>Author name</b>
              </i>
            </p>
            <p className="post-desc text-dark">
              {post.body.slice(0, 175) + "..."}
            </p>
            <button type="button" className="btn btn-danger mb-2">
              Read More..
            </button>
            <p>
              <i>{post.created}</i>
            </p>
          </Link>
        </div>
      </div>
    );
  });
  return (
    <div className="container d-flex flex-wrap flex-column">
      <h1 className="text-center mt-3">posts</h1>
      <hr className="divider mb-5" />
      {postList}
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container" id="nav-container">
          <Link to="/" className="navbar-brand">
            <i className="fab fa-hubspot fa-2x d-inline-block align-bottom mx-1" />
            DaffDev
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav w-100 justify-content-end">
              <ul className="nav">
                <li className="nav-item">
                  <Link to="/devs">Devs</Link>
                </li>
                <li className="nav-item">
                  <Link to="/posts">Posts</Link>
                </li>
                <li className="nav-item">
                  <Link to="/profile">Profile</Link>
                </li>
                <form className="form-inline my-2 my-lg-0">
                  <Link
                    to="/login"
                    className="btn btn-danger my-2 mx-3 my-sm-0"
                  >
                    Login
                  </Link>
                  <Link to="/signup" className="btn btn-danger my-2 my-sm-0">
                    Sign Up
                  </Link>
                </form>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

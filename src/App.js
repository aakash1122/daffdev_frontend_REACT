import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Login from "./components/Login";
import DevFeed from "./components/dev/DevFeed";
import PostFeed from "./components/post/PostFeed";
import PostDetail from "./components/post/PostDetail";
import Profile from "./components/dev/Profile";
import Signup from "./components/Signup";

class App extends Component {
  state = {
    users: [],
    posts: [],
    isAuthenticated: false
  };

  componentDidMount() {
    // this.getUser();
  }

  getUser() {
    axios
      .get("http://localhost:5000/", { withCredentials: true })
      .then(response => {
        console.log(response.data);
        if (response.data) {
          console.log(
            "Get User: There is a user saved in the server session: "
          );
        } else {
          console.log("Get user: no user");
        }
      });
  }

  toogleAuthentication = data => {
    this.setState({
      ...this.state,
      isAuthenticated: true
    });
    console.log(this.state);
    console.log(data);
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={Header} />
            <Route
              exact
              path="/login"
              render={props => (
                <Login toogleAuthentication={this.toogleAuthentication} />
              )}
            />
            <Route path="/signup" component={Signup} />
            <Route exact path="/devs" component={DevFeed} />
            <Route
              exact
              path="/posts"
              render={() => <PostFeed posts={this.state.posts} />}
            />
            <Route
              path="/posts/:id"
              render={match => (
                <PostDetail posts={this.state.posts} match={match} />
              )}
            />
            <Route
              path="/devs/:id"
              render={match => (
                <Profile posts={this.state.users} match={match} />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

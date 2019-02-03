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
import DevDetail from "./components/dev/DevDetail";
import AddPost from "./components/post/AddPost";

class App extends Component {
  state = {
    users: [],
    posts: [],
    isAuthenticated: false
  };

  componentDidMount() {
    this.getAllPosts();
    this.getAllUser();
  }

  getAllUser = () => {
    axios
      .get("http://localhost:5000/users", { withCredentials: true })
      .then(users => {
        this.setState({
          users: users
        });
        console.log("users fetched ", this.state.users);
      })
      .catch(err => console.log(err));
  };

  getAllPosts = () => {
    axios
      .get("http://localhost:5000/posts", { withCredentials: true })
      .then(posts => {
        this.setState({
          posts: posts
        });
        console.log("Posts fetched ", this.state.posts);
      })
      .catch(err => console.log(err));
  };

  getUser = () => {
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
  };

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
            <Route exact path="/dev/:id" component={DevDetail} />
            <Route path="/devs" component={DevFeed} />
            <Route
              exact
              path="/posts"
              render={() => <PostFeed posts={this.state.posts} />}
            />
            <Route path="/addPost" component={AddPost} />
            <Route
              path="/posts/:id"
              render={match => (
                <PostDetail posts={this.state.posts} match={match} />
              )}
            />
            <Route
              path="/profile"
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

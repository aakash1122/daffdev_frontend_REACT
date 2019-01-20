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
    users: [
      { id: 1, email: "aa@gmail.com", username: "aakash" },
      { id: 2, email: "aa@gmail.com", username: "aakash" }
    ],
    posts: [
      {
        id: 1,
        title: "A brand new post",
        body:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt vitae nisi inventore voluptatem, itaque nihil numquam nostrum cumque! Quidem dolores saepe temporibus vitae ratione illo, dolorum eligendi voluptatibus neque ad expedita voluptates optio at molestiae. Assumenda dolorum soluta aliquid asperiores? ",
        image:
          "https://images.unsplash.com/photo-1546627602-6feaf59bf36e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
        created: "12 jan 2018"
      },
      {
        id: 2,
        title: "A brand new post",
        body:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt vitae nisi inventore voluptatem, itaque nihil numquam nostrum cumque! Quidem dolores saepe temporibus vitae ratione illo, dolorum eligendi voluptatibus neque ad expedita voluptates optio at molestiae. Assumenda dolorum soluta aliquid asperiores? ",
        image:
          "https://images.pexels.com/photos/1033374/pexels-photo-1033374.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        created: "12 jan 2018"
      },
      {
        id: 3,
        title: "A brand new post",
        body:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt vitae nisi inventore voluptatem, itaque nihil numquam nostrum cumque! Quidem dolores saepe temporibus vitae ratione illo, dolorum eligendi voluptatibus neque ad expedita voluptates optio at molestiae. Assumenda dolorum soluta aliquid asperiores? ",
        image:
          "https://images.pexels.com/photos/999250/pexels-photo-999250.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        created: "12 jan 2018"
      }
    ],
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

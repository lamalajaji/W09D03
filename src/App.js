import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Register";
import List from "./components/List";
import Users from "./components/Users";

export default class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route exact path="/list" element={<List />} />
          <Route exact path="signup" element={<SignUp />} />
          <Route exact path="/users" element={<Users />} />
        </Routes>
      </div>
    );
  }
}

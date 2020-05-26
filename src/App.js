import React, { Component } from "react";
import NavbarComponent from "./components/navbar_component";
import JumbotronComponent from "./components/jumbotron_component";
import { BrowserRouter, Route } from "react-router-dom";
import HomeContainer from "./containers/home_container";
import CreateUserContainer from "./containers/createUser_containter";
import DetailUserContainer from "./containers/detailUser_container";
import EditUserContainer from "./containers/editUser_container";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent />
        <BrowserRouter>
          <Route exact path="/" component={HomeContainer} />

          <Route exact path="/create" component={CreateUserContainer} />

          <Route exact path="/detail/:id" component={DetailUserContainer} />

          <Route exact path="/edit/:id" component={EditUserContainer} />
        </BrowserRouter>
      </div>
    );
  }
}

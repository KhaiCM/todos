import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
  } from "react-router-dom";
import SignIn from "./components/auth/Signin";
import SignUp from "./components/auth/Signup";
import Dashboard from "./components/auth/Dashboard";
import About from "./components/router/about";
import Contact from "./components/router/contact";
import Page from "./components/router/page";
import AntDemo from "./components/auth/DashboardAnt";

const NotFound = () => <div>Not found</div>
const Routes = () => (
  <Switch>
    <Redirect exact path="/" to="/signin" />
    <Route exact path="/signin" component={SignIn} />
    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/page" component={Page} />
    <Route exact path="/antdesign" component={AntDemo} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes;
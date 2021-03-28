import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const SignIn = () => (
  <div>
    <h1>this is sign in </h1>
    <Link
      to="/dashboard"
    >
      Dashboard
    </Link>
  </div>
)

export default SignIn
import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Link,
  NavLink
} from "react-router-dom";

const Dashboard = () => (
  <div>
    <h1>this is Dash board</h1>
    <nav>
      <ul>
        <li>
          <NavLink
            to="/about"
            activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}
          >
            about
          </NavLink>
        </li>
        <li>
          <Link
          to="/contact"
          >
            contact</Link>
        </li>
        <li>
          <Link to="/page">page</Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default Dashboard
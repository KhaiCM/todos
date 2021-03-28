import React, {Component} from 'react'

import { useRouteMatch } from "react-router-dom";

function About() {
  let match = useRouteMatch("/about");
  return <h1>this is about</h1>;
}

export default About
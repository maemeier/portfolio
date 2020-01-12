import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage";
import AboutMe from "./pages/aboutMe";
import Coding from "./pages/coding";
import Links from "./components/link.js";
import "./App.css";

function App() {
  return (
    <>
      <Links />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/coding" component={Coding} />
        <Route exact path="/aboutMe" component={AboutMe} />
      </Switch>
    </>
  );
}

export default App;

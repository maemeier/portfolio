import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage";
import AboutMe from "./pages/aboutMe";
import Coding from "./pages/coding";
import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/coding" component={Coding} />
        <Route exact path="/aboutMe" component={AboutMe} />
      </Switch>
    </>
  );
}

export default App;

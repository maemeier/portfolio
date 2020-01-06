import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage";
import Coding from "./pages/coding";
import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/coding" component={Coding} />
      </Switch>
    </>
  );
}

export default App;

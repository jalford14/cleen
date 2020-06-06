import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./containers/Home";
import WashForm from "./components/WashForm";
import Header from "./components/Header";
import About from "./containers/About";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/form" component={WashForm} />
        <Route exact path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();

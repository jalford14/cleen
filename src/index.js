import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import App from "./containers/App";
import WashForm from "./components/WashForm";
import Header from "./components/Header";
import About from "./components/About";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/form" component={WashForm} />
        <Route exact path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

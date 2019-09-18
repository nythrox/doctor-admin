import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "../../routes/login";
import Sidebar from "../sidebar";

function App() {
  return (
    <Router>     

      {/* path / will be error 404 */}
      {/* override path / with homepage (if logged in) else with login page */}

      <Route path="/login" exact component={Login} />
    <section class="wrapper active">
      <Route path="/" exact component={Sidebar} />
      </section>
      {/* <Route path="/" exact component={Login} /> */}
    </Router>
  );
}

export default App;

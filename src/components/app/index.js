import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "../../routes/login";
import Sidebar from "../sidebar";
import Home from "../home";
import Footer from "../footer";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/login" exact component={Login} />
        <section class="wrapper active">
          <Route exact path="/" component={Sidebar} />
          <Route exact path="/" component={Home} />
          <Route exact path="/" component={Footer} />
        </section>
        {/* <Route path="/" exact component={Login} /> */}
      </Router>
    );
  }
}

export default App;

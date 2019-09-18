import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../../routes/login";
import Sidebar from "../sidebar";
import Home from "../../routes/home";
import Footer from "../footer";
import Calendario from "../../routes/calendario";
import Navbar from "../navbar";
import DetalhesConsulta from "../../routes/detalhes-consulta";
import Gerenciamento from "../../routes/gerenciamento";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/login" exact component={Login} />
        <section class="wrapper active">
          <Route path="/" component={Sidebar} />
          <Route path="/" component={Navbar} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/calendario" component={Calendario} />
            <Route exact path="/detalhes-da-consulta" component={DetalhesConsulta} />
            <Route exact path="/gerenciamento" component={Gerenciamento} />
          </Switch>
          <Route path="/" component={Footer} />
        </section>
        {/* <Route path="/" exact component={Login} /> */}
      </Router>
    );
  }
}

export default App;

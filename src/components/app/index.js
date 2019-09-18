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
import Usuarios from "../../routes/usuarios";
import UsuariosEditar from "../../routes/usuarios-editar";
import UsuariosImportarCsv from "../../routes/usuarios-importar-csv";
import UsuariosImportarCsv2 from "../../routes/usuarios-importar-csv-2";
import QuemSomos from "../../routes/quem-somos";
import Noticias from "../../routes/noticias";
import NoticiasEditar from "../../routes/noticias-editar";

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
            <Route exact path="/usuarios" component={Usuarios} />
            <Route exact path="/usuarios-editar" component={UsuariosEditar} />
            <Route exact path="/usuarios-importar-csv" component={UsuariosImportarCsv} />
            <Route exact path="/usuarios-importar-csv-2" component={UsuariosImportarCsv2} />
            <Route exact path="/quem-somos" component={QuemSomos} />
            <Route exact path="/noticias" component={Noticias} />
            <Route exact path="/noticias-editar" component={NoticiasEditar} />
          </Switch>
          <Route path="/" component={Footer} />
        </section>
        {/* <Route path="/" exact component={Login} /> */}
      </Router>
    );
  }
}

export default App;

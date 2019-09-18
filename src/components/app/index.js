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
import Usuarios from "../../routes/usuarios/usuarios";
import UsuariosEditar from "../../routes/usuarios/usuarios-editar";
import UsuariosImportarCsv from "../../routes/usuarios/usuarios-importar-csv";
import UsuariosImportarCsv2 from "../../routes/usuarios/usuarios-importar-csv-int";
import QuemSomos from "../../routes/quem-somos";
import Noticias from "../../routes/noticias/noticias";
import NoticiasEditar from "../../routes/noticias/noticias-editar";
import Tour from "../../routes/tour/tour";
import TourEditar from "../../routes/tour/tour-editar";
import Template from "../../routes/template/template";
import TemplateEditar from "../../routes/template/template-editar";
import Chat from "../../routes/chat/chat";
import ChatInt from "../../routes/chat/chat-int";
import TiposDeTratamento from "../../routes/tipos-de-tratamento/tipos-de-tratamento";
import TiposDeTratamentoEditar from "../../routes/tipos-de-tratamento/tipos-de-tratamento-editar";

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
            <Route exact path="/tour" component={Tour} />
            <Route exact path="/tour-editar" component={TourEditar} />
            <Route exact path="/tipos-de-tratamento" component={TiposDeTratamento} />
            <Route exact path="/tipos-de-tratamento-editar" component={TiposDeTratamentoEditar} />
            <Route exact path="/template" component={Template} />
            <Route exact path="/template-editar" component={TemplateEditar} />
            <Route exact path="/chat" component={Chat} />
            <Route exact path="/chat-int" component={ChatInt} />
          </Switch>
          <Route path="/" component={Footer} />
        </section>
        {/* <Route path="/" exact component={Login} /> */}
      </Router>
    );
  }
}

export default App;

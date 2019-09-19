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
import EditarPerfil from "../../routes/editar-perfil";
import ConvidarPaciente from "../../routes/convidar-paciente";
import MinhasConsultas from "../../routes/minhas-consultas/minhas-consultas";
import MinhasConsultasInt from "../../routes/minhas-consultas/minhas-consultas-int";
import Error404 from "../error-404";
import MeusPacientes from "../../routes/meus-pacientes";
import ConsultasRealizadas from "../../routes/consultas-realizdas/consultas-realizadas";
import ConsultasRealizadasInt from "../../routes/consultas-realizdas/consultas-realizadas-int";

function App() {

    return (
      <Router>
        <Switch>
        <Route path="/login" exact component={Login} />
        <section class="wrapper active">
          <Route path="/" component={Sidebar} />
          <Route path="/" component={Navbar} />
          <Switch>

            {/* front novo */}
            <Route exact path="/editar-perfil" component={EditarPerfil} />
            <Route exact path="/convidar-paciente" component={ConvidarPaciente} />
            <Route exact path="/minhas-consultas" component={MinhasConsultas} />
            <Route exact path="/minhas-consultas-int" component={MinhasConsultasInt} />
            <Route exact path="/meus-pacientes" component={MeusPacientes} />
            <Route exact path="/consultas-realizadas" component={ConsultasRealizadas} />
            <Route exact path="/consultas-realizadas-int" component={ConsultasRealizadasInt} />

            {/* front antigo   */}
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

            {/* erro 404 */}
            <Route path="/" component={Error404} />
          </Switch>
          <Route path="/" component={Footer} />
        </section>
        </Switch>
        {/* <Route path="/" exact component={Login} /> */}
      </Router>
    );
  
}

export default App;

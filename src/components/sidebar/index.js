import React, { Component } from 'react';
import Logo from '../../assets/img/logo-cliente.png';
import LogoResponsive from '../../assets/img/logo-icon.png';
import ModalMedico from '../modals/modal-medico';
import ModalClinica from '../modals/modal-clinica';
import ModalCadastrarConsulta from '../modals/modal-cadastrar-consultas';
import ModalDadosContato from '../modals/modal-dados-contato';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Sidebar extends Component {
  
    render(){
        return (
            <div className="sidebar-wrapper">
              <div className="sidebar-nav">
                {/* top */}
                <div className="box-logo">
                  <Link to="/"><img className="img-responsive logo-toggle" src={LogoResponsive} alt="Logo" /></Link>
                  <div className="logo-int">
                    <Link to="/"><img className="img-responsive" src={Logo}alt="" /></Link>
                    <div className="title">
                      <p>Sistema de Gerenciamento</p>
                    </div>
                  </div>
                </div>
                {/* center */}
                <div className="box-nav">
                  <ul className="nav">
                    <span><h6>Menu para visualizar o Front</h6></span>
                    <li className="dropdown">
                      <a href="javascript:0" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-caret-right" />Front Novo</a>
                      <ul className="dropdown-menu" role="menu">
                        <li><Link to="/editar-perfil/">Editar perfil</Link></li>
                        <li><Link to="/convidar-paciente/">Convidar um paciente</Link></li>
                        <li><Link to="/minhas-consultas/">Minhas consultas</Link></li>
                        <li><Link to="/consultas-realizadas/">Consultas realizadas</Link></li>
                        <li><Link to="/meus-pacientes/">Meus pacientes</Link></li>
                        <li><a href="assets/email/index.html" target="blank">E-mail</a></li>
                        <li><a href="assets/email/senha.html" target="blank">E-mail Senha</a></li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="javascript:0" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-caret-right" />Front Antigo</a>
                      <ul className="dropdown-menu" role="menu">
                        <li><a href="/login/">Login</a></li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/calendario/">Calendário</Link></li>
                        <li><Link to="/detalhes-da-consulta/">Detalhes da Consulta</Link></li>
                        <li><Link to="/gerenciamento/">Gerenciamento</Link></li>
                        <li><Link to="/usuarios/">Usuários</Link></li>
                        <li><Link to="/quem-somos/">Quem Somos</Link></li>
                        <li><Link to="/noticias/">Notícias</Link></li>
                        <li><Link to="/tipos-de-tratamento/">Tipos de Tratamento</Link></li>
                        <li><Link to="/tour/">Tour</Link></li>
                        <li><a href="javascript:0" data-fancybox data-src="#modalDadosContato">Dados de Contato *modal</a></li>
                        <li><a href="javascript:0" data-fancybox data-src="#modalCadastrarConsultas">Cadastrar Consultas *modal</a></li>
                        <li><a href="javascript:0" data-fancybox data-src="#modalClinica">Clínica *modal</a></li>
                        <li><a href="javascript:0" data-fancybox data-src="#modalMedico">Médico *modal</a></li>
                        <li><Link to="/chat/">Chat</Link></li>
                        <li><Link to="/template/">Template</Link></li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="javascript:0" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-caret-right" />Front Erros</a>
                      <ul className="dropdown-menu" role="menu">
                        <li><a href="error-404.php">Error 404</a></li>
                        <li><a href="error-403.php">Error 403</a></li>
                        <li><a href="error-500.php">Error 500</a></li>
                        <li><a href="maintenance-503.php">Maintenance 503</a></li>
                      </ul>
                    </li>
                    {/*
                      <span><h6>Título do menu</h6></span>
                      <li class="dropdown">
                          <a href="javascript:0" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-caret-right"></i>Menu</a>
                          <ul class="dropdown-menu" role="menu">
                              <li><a href="javascript:0">Submenu</a></li>
                              <li><a href="javascript:0">Submenu</a></li>
                              <li><a href="javascript:0">Submenu</a></li>
                          </ul>
                      </li>
                      <li class="dropdown">
                          <a href="javascript:0" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-caret-right"></i>Menu</a>
                          <ul class="dropdown-menu" role="menu">
                              <li><a href="javascript:0">Submenu</a></li>
                              <li><a href="javascript:0">Submenu</a></li>
                              <li><a href="javascript:0">Submenu</a></li>
                              <li><a href="javascript:0">Submenu</a></li>
                          </ul>
                      </li>
                      */}
                  </ul>
                </div>
                {/* abrir/fechar */}
                <a id="menu-toggle" href="javascript:0"/>
              </div>
              <ModalMedico/>
              <ModalClinica/>
              <ModalCadastrarConsulta/>
              <ModalDadosContato/>
            </div>
        );
    }
}
export default Sidebar;   
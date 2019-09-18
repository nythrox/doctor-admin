import React, { Component } from 'react';
import Logo from '../../assets/img/logo-cliente.png';
import LogoResponsive from '../../assets/img/logo-icon.png';
import ModalMedico from '../modal-medico';
import ModalClinica from '../modal-clinica';
import ModalCadastrarConsulta from '../modal-cadastrar-consultas';
import ModalDadosContato from '../modal-dados-contato';
class Sidebar extends Component {

    

    render(){
        return (
            <div className="sidebar-wrapper">
              <div className="sidebar-nav">
                {/* top */}
                <div className="box-logo">
                  <a href="dashboard.php"><img className="img-responsive logo-toggle" src={LogoResponsive} alt="Logo" /></a>
                  <div className="logo-int">
                    <a href="home.php"><img className="img-responsive" src={Logo}alt="" /></a>
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
                      <a href="/#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-caret-right" />Front Novo</a>
                      <ul className="dropdown-menu" role="menu">
                        <li><a href="editar-perfil.php">Editar perfil</a></li>
                        <li><a href="convidar-paciente.php">Convidar um paciente</a></li>
                        <li><a href="minhas-consultas.php">Minhas consultas</a></li>
                        <li><a href="consultas-realizadas.php">Consultas realizadas</a></li>
                        <li><a href="meus-pacientes.php">Meus pacientes</a></li>
                        <li><a href="assets/email/index.html" target="blank">E-mail</a></li>
                        <li><a href="assets/email/senha.html" target="blank">E-mail Senha</a></li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="/#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-caret-right" />Front Antigo</a>
                      <ul className="dropdown-menu" role="menu">
                        <li><a href="index.php">Login</a></li>
                        <li><a href="home.php">Home</a></li>
                        <li><a href="calendario.php">Calendário</a></li>
                        <li><a href="detalhes-da-consulta.php">Detalhes da Consulta</a></li>
                        <li><a href="gerenciamentos.php">Gerenciamento</a></li>
                        <li><a href="usuarios.php">Usuários</a></li>
                        <li><a href="quem-somos.php">Quem Somos</a></li>
                        <li><a href="noticias.php">Notícias</a></li>
                        <li><a href="tipos-de-tratamento.php">Tipos de Tratamento</a></li>
                        <li><a href="tour.php">Tour</a></li>
                        <li><a href="#!" data-fancybox data-src="#modalDadosContato">Dados de Contato *modal</a></li>
                        <li><a href="#!" data-fancybox data-src="#modalCadastrarConsultas">Cadastrar Consultas *modal</a></li>
                        <li><a href="#!" data-fancybox data-src="#modalClinica">Clínica *modal</a></li>
                        <li><a href="#!" data-fancybox data-src="#modalMedico">Médico *modal</a></li>
                        <li><a href="chat.php">Chat</a></li>
                        <li><a href="template.php">Template</a></li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="/#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-caret-right" />Front Erros</a>
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
                          <a href="/#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-caret-right"></i>Menu</a>
                          <ul class="dropdown-menu" role="menu">
                              <li><a href="#!">Submenu</a></li>
                              <li><a href="#!">Submenu</a></li>
                              <li><a href="#!">Submenu</a></li>
                          </ul>
                      </li>
                      <li class="dropdown">
                          <a href="/#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-caret-right"></i>Menu</a>
                          <ul class="dropdown-menu" role="menu">
                              <li><a href="#!">Submenu</a></li>
                              <li><a href="#!">Submenu</a></li>
                              <li><a href="#!">Submenu</a></li>
                              <li><a href="#!">Submenu</a></li>
                          </ul>
                      </li>
                      */}
                  </ul>
                </div>
                {/* abrir/fechar */}
                <a id="menu-toggle" href="#!"/>
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
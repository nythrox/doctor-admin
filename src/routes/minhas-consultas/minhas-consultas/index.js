import React, { Component } from "react";
import Breadcrumbs from "../../../components/breadcrumbs";
import Avatar from '../../../assets/img/avatar.jpg';
class MinhasConsultas extends Component {
  
componentDidMount(){
  window.mount()
}
  render() {
    return (
      <div className="page-content-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              {/* breadcrumb */}
              <Breadcrumbs/>
              <div className="title">
                <h1>Minhas Consultas</h1>
                <h6>Veja aqui suas consultas marcadas.</h6>
              </div>
              <div className="box-filtro mv-0">
                <div className="row">
                  <div className="col-xs-12 col-sm-8 col-md-9 col-lg-4">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder />
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-3 col-lg-2">
                    <button className="btn btn-2 btn-block icon">
                      <i className="fa fa-search" />
                      Buscar
                    </button>
                  </div>
                </div>
              </div>
              <div className="box-item-int">
                <div className="row">
                  <div className="col-xs-12">
                    <h5 className="mb-0">Solicitações de Consultas</h5>
                    <h6 className="margin-bottom-20">
                      Abaixo as solicitações de consulta marcadas pelo médico.
                      Basta aceitar para que possa realizar sua teleconsulta.
                    </h6>
                  </div>
                  <div className="col-xs-12 col-md-6 col-lg-4">
                    <div className="card boxHeight">
                      <span className="msg-hidden">
                        <h6>
                          Você recusou a consulta.
                          <br />
                          Ela foi cancelada.
                        </h6>
                      </span>
                      <div className="item-top flex-space">
                        <div className="group-avatar">
                          <img src={Avatar} alt="Nome" />
                          <div className="group">
                            <h6>
                              <strong>Nome Paciente</strong>
                            </h6>
                            <h6>CPF 999.999.999-99</h6>
                          </div>
                        </div>
                        <div className="group-avaliar">
                          <i className="fa fa-star" />
                          <h6>3,0</h6>
                        </div>
                      </div>
                      <div className="item-center">
                        <h3>Ortopedia</h3>
                        <h6>Consulta: CM45KO6R7</h6>
                      </div>
                      <div className="item-bottom border-top">
                        <div className="content flex-space">
                          <a href="/#" className="btn btn-block">
                            Aceitar
                          </a>
                          <a
                            href="javascript:"
                            className="btn btn-line btn-block js-card-recusar"
                          >
                            Recusar
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-md-6 col-lg-4">
                    <div className="card boxHeight">
                      <span className="msg-hidden">
                        <h6>
                          Você recusou a consulta.
                          <br />
                          Ela foi cancelada.
                        </h6>
                      </span>
                      <div className="item-top flex-space">
                        <div className="group-avatar">
                          <img src={Avatar} alt="Nome" />
                          <div className="group">
                            <h6>
                              <strong>Nome Paciente</strong>
                            </h6>
                            <h6>CPF 999.999.999-99</h6>
                          </div>
                        </div>
                        <div className="group-avaliar">
                          <i className="fa fa-star" />
                          <h6>3,0</h6>
                        </div>
                      </div>
                      <div className="item-center">
                        <h3>Ortopedia</h3>
                        <h6>Consulta: CM45KO6R7</h6>
                      </div>
                      <div className="item-bottom border-top">
                        <div className="content flex-space">
                          <a href="/#" className="btn btn-block">
                            Aceitar
                          </a>
                          <a
                            href="javascript:"
                            className="btn btn-line btn-block js-card-recusar"
                          >
                            Recusar
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12">
                    <h5 className="mb-0 margin-top-30">Suas Consultas</h5>
                    <h6 className="margin-bottom-20">
                      Confira abaixo a lista de consultas marcadas para você.
                    </h6>
                  </div>
                  <div className="col-xs-12">
                    <ul className="nav nav-tab border-bottom">
                      <li className="active">
                        <a href="#nav-2-1" data-toggle="tab">
                          Todos
                        </a>
                      </li>
                      <li>
                        <a href="#nav-2-2" data-toggle="tab">
                          Esta semana
                        </a>
                      </li>
                      <li>
                        <a href="#nav-2-3" data-toggle="tab">
                          Este mês
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div className="tab-pane active" id="nav-2-1">
                        <div className="row">
                          <div className="col-xs-12 col-md-6 col-lg-4">
                            <div className="card boxHeight">
                              <a href="minhas-consultas-int.php">
                                <div className="item-top flex-space">
                                  <div className="group-avatar">
                                    <img
                                      src={Avatar}
                                      alt="Nome"
                                    />
                                    <div className="group">
                                      <h6>
                                        <strong>Nome Paciente</strong>
                                      </h6>
                                      <h6>CPF 999.999.999-99</h6>
                                    </div>
                                  </div>
                                  <div className="group-avaliar">
                                    <i className="fa fa-star" />
                                    <h6>3,0</h6>
                                  </div>
                                </div>
                                <div className="item-center">
                                  <div className="content flex-space">
                                    <div className="group">
                                      <h3>Ortopedia</h3>
                                      <h6>Consulta: CM45KO6R7</h6>
                                    </div>
                                  </div>
                                </div>
                              </a>
                              <div className="item-bottom border-top">
                                <div className="content flex-space">
                                  <a
                                    href="../web/paciente/teleconsulta-anuncio.php"
                                    target="_blank"
                                    className="btn"
                                  >
                                    Entrar na sala
                                  </a>
                                  <div className="group text-right">
                                    <h6 className="italic">
                                      Expira em <br />
                                      10 dias
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xs-12 col-md-6 col-lg-4">
                            <div className="card boxHeight">
                              <a href="minhas-consultas-int.php">
                                <div className="item-top flex-space">
                                  <div className="group-avatar">
                                    <img
                                      src={Avatar}
                                      alt="Nome"
                                    />
                                    <div className="group">
                                      <h6>
                                        <strong>Nome Paciente</strong>
                                      </h6>
                                      <h6>CPF 999.999.999-99</h6>
                                    </div>
                                  </div>
                                  <div className="group-avaliar">
                                    <i className="fa fa-star" />
                                    <h6>3,0</h6>
                                  </div>
                                </div>
                                <div className="item-center">
                                  <div className="content flex-space">
                                    <div className="group">
                                      <h3>Ortopedia</h3>
                                      <h6>Consulta: CM45KO6R7</h6>
                                    </div>
                                  </div>
                                </div>
                              </a>
                              <div className="item-bottom border-top">
                                <div className="content flex-space">
                                  <a
                                    href="../web/paciente/teleconsulta-anuncio.php"
                                    target="_blank"
                                    className="btn"
                                  >
                                    Entrar na sala
                                  </a>
                                  <div className="group text-right">
                                    <h6 className="italic">
                                      Expira em <br />
                                      10 dias
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xs-12 col-md-6 col-lg-4">
                            <div className="card boxHeight">
                              <a href="minhas-consultas-int.php">
                                <div className="item-top flex-space">
                                  <div className="group-avatar">
                                    <img
                                      src={Avatar}
                                      alt="Nome"
                                    />
                                    <div className="group">
                                      <h6>
                                        <strong>Nome Paciente</strong>
                                      </h6>
                                      <h6>CPF 999.999.999-99</h6>
                                    </div>
                                  </div>
                                  <div className="group-avaliar">
                                    <i className="fa fa-star" />
                                    <h6>3,0</h6>
                                  </div>
                                </div>
                                <div className="item-center">
                                  <div className="content flex-space">
                                    <div className="group">
                                      <h3>Ortopedia</h3>
                                      <h6>Consulta: CM45KO6R7</h6>
                                    </div>
                                  </div>
                                </div>
                              </a>
                              <div className="item-bottom border-top">
                                <div className="content flex-space">
                                  <a
                                    href="../web/paciente/teleconsulta-anuncio.php"
                                    target="_blank"
                                    className="btn"
                                  >
                                    Entrar na sala
                                  </a>
                                  <div className="group text-right">
                                    <h6 className="italic">
                                      Expira em <br />
                                      10 dias
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="nav-2-2">
                        <div className="row">
                          <div className="col-xs-12 col-md-6 col-lg-4">
                            <div className="card boxHeight">
                              <a href="minhas-consultas-int.php">
                                <div className="item-top flex-space">
                                  <div className="group-avatar">
                                    <img
                                      src={Avatar}
                                      alt="Nome"
                                    />
                                    <div className="group">
                                      <h6>
                                        <strong>Nome Paciente</strong>
                                      </h6>
                                      <h6>CPF 999.999.999-99</h6>
                                    </div>
                                  </div>
                                  <div className="group-avaliar">
                                    <i className="fa fa-star" />
                                    <h6>3,0</h6>
                                  </div>
                                </div>
                                <div className="item-center">
                                  <div className="content flex-space">
                                    <div className="group">
                                      <h3>Ortopedia</h3>
                                      <h6>Consulta: CM45KO6R7</h6>
                                    </div>
                                  </div>
                                </div>
                              </a>
                              <div className="item-bottom border-top">
                                <div className="content flex-space">
                                  <a
                                    href="../web/paciente/teleconsulta-anuncio.php"
                                    target="_blank"
                                    className="btn"
                                  >
                                    Entrar na sala
                                  </a>
                                  <div className="group text-right">
                                    <h6 className="italic">
                                      Expira em <br />
                                      10 dias
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xs-12 col-md-6 col-lg-4">
                            <div className="card boxHeight">
                              <a href="minhas-consultas-int.php">
                                <div className="item-top flex-space">
                                  <div className="group-avatar">
                                    <img
                                      src={Avatar}
                                      alt="Nome"
                                    />
                                    <div className="group">
                                      <h6>
                                        <strong>Nome Paciente</strong>
                                      </h6>
                                      <h6>CPF 999.999.999-99</h6>
                                    </div>
                                  </div>
                                  <div className="group-avaliar">
                                    <i className="fa fa-star" />
                                    <h6>3,0</h6>
                                  </div>
                                </div>
                                <div className="item-center">
                                  <div className="content flex-space">
                                    <div className="group">
                                      <h3>Ortopedia</h3>
                                      <h6>Consulta: CM45KO6R7</h6>
                                    </div>
                                  </div>
                                </div>
                              </a>
                              <div className="item-bottom border-top">
                                <div className="content flex-space">
                                  <a
                                    href="../web/paciente/teleconsulta-anuncio.php"
                                    target="_blank"
                                    className="btn"
                                  >
                                    Entrar na sala
                                  </a>
                                  <div className="group text-right">
                                    <h6 className="italic">
                                      Expira em <br />
                                      10 dias
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="nav-2-3">
                        <div className="row">
                          <div className="col-xs-12 col-md-6 col-lg-4">
                            <div className="card boxHeight">
                              <a href="minhas-consultas-int.php">
                                <div className="item-top flex-space">
                                  <div className="group-avatar">
                                    <img
                                      src={Avatar}
                                      alt="Nome"
                                    />
                                    <div className="group">
                                      <h6>
                                        <strong>Nome Paciente</strong>
                                      </h6>
                                      <h6>CPF 999.999.999-99</h6>
                                    </div>
                                  </div>
                                  <div className="group-avaliar">
                                    <i className="fa fa-star" />
                                    <h6>3,0</h6>
                                  </div>
                                </div>
                                <div className="item-center">
                                  <div className="content flex-space">
                                    <div className="group">
                                      <h3>Ortopedia</h3>
                                      <h6>Consulta: CM45KO6R7</h6>
                                    </div>
                                  </div>
                                </div>
                              </a>
                              <div className="item-bottom border-top">
                                <div className="content flex-space">
                                  <a
                                    href="../web/paciente/teleconsulta-anuncio.php"
                                    target="_blank"
                                    className="btn"
                                  >
                                    Entrar na sala
                                  </a>
                                  <div className="group text-right">
                                    <h6 className="italic">
                                      Expira em <br />
                                      10 dias
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MinhasConsultas;

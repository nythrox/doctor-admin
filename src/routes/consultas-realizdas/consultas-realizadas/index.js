import React, { Component } from 'react';
import Breadcrumbs from '../../../components/breadcrumbs';
import Avatar from '../../../assets/img/avatar.jpg';
class ConsultasRealizadas extends Component {

    render(){
        return(
        
      <div className="page-content-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            {/* breadcrumb */}
            <Breadcrumbs/>
            <div className="title">
              <h1>Consultas Realizadas</h1>
              <h6>Veja aqui suas consultas realizadas.</h6>
            </div>
            <div className="box-filtro mv-0">
              <div className="row">
                <div className="col-xs-12 col-sm-8 col-md-9 col-lg-4">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-3 col-lg-2">
                  <button className="btn btn-2 btn-block icon"><i className="fa fa-search" />Buscar</button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <ul className="nav nav-tab border-bottom">
                  <li className="active"><a href="#nav-2-1" data-toggle="tab">Todos</a></li>
                  <li><a href="#nav-2-2" data-toggle="tab">Esta semana</a></li>
                  <li><a href="#nav-2-3" data-toggle="tab">Este mês</a></li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="nav-2-1">
                    <div className="row">
                      <div className="col-xs-12 col-md-6 col-lg-4">
                        <a href="consultas-realizadas-int.php" className="card boxHeight">
                          <div className="item-top flex-space">
                            <div className="group-avatar">
                              <img src={Avatar} alt="Nome" />
                              <div className="group">
                                <h6><strong>Nome Paciente</strong></h6>
                                <h6>CPF 999.999.999-99</h6>
                              </div>
                            </div>
                          </div>
                          <div className="item-center">
                            <div className="content flex-space">
                              <div className="group">
                                <h3>Ortopedia</h3>
                                <h6>Consulta: CM45KO6R7</h6>
                              </div>
                              <div className="group text-right">
                                <h6 className="italic">Realizada em<br /> 20 de julho de 2019</h6>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-xs-12 col-md-6 col-lg-4">
                        <a href="consultas-realizadas-int.php" className="card boxHeight">
                          <div className="item-top flex-space">
                            <div className="group-avatar">
                              <img src={Avatar} alt="Nome" />
                              <div className="group">
                                <h6><strong>Nome Paciente</strong></h6>
                                <h6>CPF 999.999.999-99</h6>
                              </div>
                            </div>
                          </div>
                          <div className="item-center">
                            <div className="content flex-space">
                              <div className="group">
                                <h3>Ortopedia</h3>
                                <h6>Consulta: CM45KO6R7</h6>
                              </div>
                              <div className="group text-right">
                                <h6 className="italic">Realizada em<br /> 20 de julho de 2019</h6>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-xs-12 col-md-6 col-lg-4">
                        <a href="consultas-realizadas-int.php" className="card boxHeight">
                          <div className="item-top flex-space">
                            <div className="group-avatar">
                              <img src={Avatar} alt="Nome" />
                              <div className="group">
                                <h6><strong>Nome Paciente</strong></h6>
                                <h6>CPF 999.999.999-99</h6>
                              </div>
                            </div>
                          </div>
                          <div className="item-center">
                            <div className="content flex-space">
                              <div className="group">
                                <h3>Ortopedia</h3>
                                <h6>Consulta: CM45KO6R7</h6>
                              </div>
                              <div className="group text-right">
                                <h6 className="italic">Realizada em<br /> 20 de julho de 2019</h6>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-xs-12 col-md-6 col-lg-4">
                        <a href="consultas-realizadas-int.php" className="card boxHeight">
                          <div className="item-top flex-space">
                            <div className="group-avatar">
                              <img src={Avatar} alt="Nome" />
                              <div className="group">
                                <h6><strong>Nome Paciente</strong></h6>
                                <h6>CPF 999.999.999-99</h6>
                              </div>
                            </div>
                          </div>
                          <div className="item-center">
                            <div className="content flex-space">
                              <div className="group">
                                <h3>Ortopedia</h3>
                                <h6>Consulta: CM45KO6R7</h6>
                              </div>
                              <div className="group text-right">
                                <h6 className="italic">Realizada em<br /> 20 de julho de 2019</h6>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-xs-12 col-md-6 col-lg-4">
                        <a href="consultas-realizadas-int.php" className="card boxHeight">
                          <div className="item-top flex-space">
                            <div className="group-avatar">
                              <img src={Avatar} alt="Nome" />
                              <div className="group">
                                <h6><strong>Nome Paciente</strong></h6>
                                <h6>CPF 999.999.999-99</h6>
                              </div>
                            </div>
                          </div>
                          <div className="item-center">
                            <div className="content flex-space">
                              <div className="group">
                                <h3>Ortopedia</h3>
                                <h6>Consulta: CM45KO6R7</h6>
                              </div>
                              <div className="group text-right">
                                <h6 className="italic">Realizada em<br /> 20 de julho de 2019</h6>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-xs-12 col-md-6 col-lg-4">
                        <a href="consultas-realizadas-int.php" className="card boxHeight">
                          <div className="item-top flex-space">
                            <div className="group-avatar">
                              <img src={Avatar} alt="Nome" />
                              <div className="group">
                                <h6><strong>Nome Paciente</strong></h6>
                                <h6>CPF 999.999.999-99</h6>
                              </div>
                            </div>
                          </div>
                          <div className="item-center">
                            <div className="content flex-space">
                              <div className="group">
                                <h3>Ortopedia</h3>
                                <h6>Consulta: CM45KO6R7</h6>
                              </div>
                              <div className="group text-right">
                                <h6 className="italic">Realizada em<br /> 20 de julho de 2019</h6>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="nav-2-2">
                    <div className="row">
                      <div className="col-xs-12 col-md-6 col-lg-4">
                        <a href="consultas-realizadas-int.php" className="card boxHeight">
                          <div className="item-top flex-space">
                            <div className="group-avatar">
                              <img src={Avatar} alt="Nome" />
                              <div className="group">
                                <h6><strong>Nome Paciente</strong></h6>
                                <h6>CPF 999.999.999-99</h6>
                              </div>
                            </div>
                          </div>
                          <div className="item-center">
                            <div className="content flex-space">
                              <div className="group">
                                <h3>Ortopedia</h3>
                                <h6>Consulta: CM45KO6R7</h6>
                              </div>
                              <div className="group text-right">
                                <h6 className="italic">Realizada em<br /> 20 de julho de 2019</h6>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-xs-12 col-md-6 col-lg-4">
                        <a href="consultas-realizadas-int.php" className="card boxHeight">
                          <div className="item-top flex-space">
                            <div className="group-avatar">
                              <img src={Avatar} alt="Nome" />
                              <div className="group">
                                <h6><strong>Nome Paciente</strong></h6>
                                <h6>CPF 999.999.999-99</h6>
                              </div>
                            </div>
                          </div>
                          <div className="item-center">
                            <div className="content flex-space">
                              <div className="group">
                                <h3>Ortopedia</h3>
                                <h6>Consulta: CM45KO6R7</h6>
                              </div>
                              <div className="group text-right">
                                <h6 className="italic">Realizada em<br /> 20 de julho de 2019</h6>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="nav-2-3">
                    <div className="row">
                      <div className="col-xs-12 col-md-6 col-lg-4">
                        <a href="consultas-realizadas-int.php" className="card boxHeight">
                          <div className="item-top flex-space">
                            <div className="group-avatar">
                              <img src={Avatar} alt="Nome" />
                              <div className="group">
                                <h6><strong>Nome Paciente</strong></h6>
                                <h6>CPF 999.999.999-99</h6>
                              </div>
                            </div>
                          </div>
                          <div className="item-center">
                            <div className="content flex-space">
                              <div className="group">
                                <h3>Ortopedia</h3>
                                <h6>Consulta: CM45KO6R7</h6>
                              </div>
                              <div className="group text-right">
                                <h6 className="italic">Realizada em<br /> 20 de julho de 2019</h6>
                              </div>
                            </div>
                          </div>
                        </a>
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
export default ConsultasRealizadas;
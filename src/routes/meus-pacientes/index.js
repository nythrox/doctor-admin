import React, { Component } from 'react';
import Breadcrumbs from '../../components/breadcrumbs';
import Avatar from '../../assets/img/avatar.jpg';
class MeusPacientes extends Component {

    render(){
        return(
        
      <div className="page-content-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            {/* breadcrumb */}
            <Breadcrumbs/>
            <div className="title">
              <h1>Meus Pacientes</h1>
              <h6>Confirma a lista dos pacientes que já atendeu.</h6>
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
              <div className="col-xs-12 col-md-6 col-lg-4">
                <a href="meus-pacientes-int.php" className="card boxHeight">
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
                        <h6 className="italic">Ultima consulta<br /> 20 de julho de 2019</h6>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-xs-12 col-md-6 col-lg-4">
                <a href="meus-pacientes-int.php" className="card boxHeight">
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
                        <h6 className="italic">Ultima consulta<br /> 20 de julho de 2019</h6>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-xs-12 col-md-6 col-lg-4">
                <a href="meus-pacientes-int.php" className="card boxHeight">
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
                        <h6 className="italic">Ultima consulta<br /> 20 de julho de 2019</h6>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-xs-12 col-md-6 col-lg-4">
                <a href="meus-pacientes-int.php" className="card boxHeight">
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
                        <h6 className="italic">Ultima consulta<br /> 20 de julho de 2019</h6>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-xs-12 col-md-6 col-lg-4">
                <a href="meus-pacientes-int.php" className="card boxHeight">
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
                        <h6 className="italic">Ultima consulta<br /> 20 de julho de 2019</h6>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-xs-12 col-md-6 col-lg-4">
                <a href="meus-pacientes-int.php" className="card boxHeight">
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
                        <h6 className="italic">Ultima consulta<br /> 20 de julho de 2019</h6>
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
          );
    }
}
export default MeusPacientes;
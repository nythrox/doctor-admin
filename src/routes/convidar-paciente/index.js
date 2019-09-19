import React, { Component } from 'react';
import Breadcrumbs from '../../components/breadcrumbs';
class ConvidarPaciente extends Component {

    render(){
        return( <div className="page-content-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              {/* breadcrumb */}
              <Breadcrumbs/>
              <div className="title">
                <h1>Convidar Paciente</h1>
                <h6 className="margin-bottom-20">Convide um paciente para utilizar o Conecta Médico.</h6>
                <div className="alert alert-info alert-dismissible" role="alert">
                  <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
                  Campos com <strong>*</strong> são obrigatórios.
                </div>
              </div>
              <form action className="form-vertical" autoComplete="off">
                <div className="box-item-int">
                  <div className="row">
                    <div className="col-xs-12 col-md-4">
                      <div className="form-group">
                        <label>E-mail do paciente <span>*</span></label>
                        <input type="email" className="form-control" />
                      </div>
                    </div>
                    <div className="col-xs-12">
                      <div className="form-group check-custom">
                        <label>
                          <input type="checkbox" name defaultValue />
                          <i className="fa fa-square-o" /><i className="fa fa-check-square-o" />
                          Marcar Retorno?
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-btn-footer">
                  <button className="btn btn-large icon"><i className="fa fa-envelope" />Enviar convite</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
          );
    }
}
export default ConvidarPaciente;
import React, { Component } from 'react';
import Breadcrumbs from '../../../components/breadcrumbs';
class UsuariosEditar extends Component {

    render(){
        return(
          <div className="page-content-wrapper">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xs-12">
                  {/* breadcrumb */}
                  <Breadcrumbs/>
                  <div className="title">
                    <h1>Cadastro de usuário</h1>
                    <div className="alert alert-info alert-dismissible" role="alert">
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
                      Campos com <strong>*</strong> são obrigatórios.
                    </div>
                  </div>
                  <form action autoComplete="off">
                    <div className="box-item-int">
                      <h5>Dados do usuário</h5>
                      <div className="row">
                        <div className="form-group">
                          <div className="col-xs-12 col-sm-6 col-md-4">
                            <label>Nome <span>*</span></label>
                            <input type="text" className="form-control" id />
                          </div>
                          <div className="col-xs-12 col-sm-6 col-md-4">
                            <label>CPF <span>*</span></label>
                            <input type="tel" className="form-control input-cpf" id />
                          </div>
                          <div className="col-xs-12 col-sm-6 col-md-4">
                            <label>E-mail</label>
                            <input type="email" className="form-control" id />
                          </div>
                          <div className="col-xs-12 col-sm-6 col-md-4">
                            <label>Gênero</label>
                            <select name id className="form-control">
                              <option value>...</option>
                              <option value>Option</option>
                              <option value>Option</option>
                            </select>
                          </div>
                          <div className="col-xs-12 col-sm-6 col-md-4">
                            <label>Telefone</label>
                            <input type="tel" className="form-control input-tel" id />
                          </div>
                          <div className="col-xs-12 col-sm-6 col-md-4">
                            <label>Celular</label>
                            <input type="tel" className="form-control input-cel" id />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="box-btn-footer">
                      <button className="btn btn-large icon"><i className="fa fa-check" />Salvar</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          );
    }
}
export default UsuariosEditar;
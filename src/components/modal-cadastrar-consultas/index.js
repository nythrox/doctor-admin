import React, { Component } from "react";
class ModalCadastrarConsulta extends Component {
  render() {
    return (
      <div id="modalCadastrarConsultas" className="fancybox">
        <div className="titulo-modal">
          <h2>Cadastrar consultas</h2>
        </div>
        <form action autoComplete="off">
          {/* Box */}
          <div className="box-item-int">
            <div className="row">
              <div className="col-xs-12">
                <h5>Consulta</h5>
              </div>
              <div className="col-xs-12 col-md-3">
                <div className="form-group">
                  <label>Paciente</label>
                  <select name id className="form-control">
                    <option value>...</option>
                    <option value>Option</option>
                    <option value>Option</option>
                  </select>
                </div>
              </div>
              <div className="col-xs-12 col-md-3">
                <div className="form-group">
                  <label>Especialidade</label>
                  <select name id className="form-control">
                    <option value>...</option>
                    <option value>Option</option>
                    <option value>Option</option>
                  </select>
                </div>
              </div>
              <div className="col-xs-12 col-md-3">
                <div className="form-group">
                  <label>Data</label>
                  <input
                    type="tel"
                    className="form-control input-data datepicker-js"
                  />
                </div>
              </div>
              <div className="col-xs-12 col-md-3">
                <div className="form-group">
                  <label>Médico</label>
                  <select name id className="form-control">
                    <option value>...</option>
                    <option value>Option</option>
                    <option value>Option</option>
                  </select>
                </div>
              </div>
              <div className="col-xs-12 col-md-3 margin-top-30">
                <button className="btn icon">
                  <i className="fa fa-check" />
                  Salvar
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default ModalCadastrarConsulta;

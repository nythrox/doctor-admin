import React, { Component } from 'react';
class ModalClinica extends Component {

    render(){
        return(
          <div id="modalClinica" className="fancybox">
            <div className="titulo-modal">
              <h2>Clínica</h2>
            </div>
            <form action autoComplete="off">
              {/* Box */}
              <div className="box-item-int">
                <div className="row">
                  <div className="col-xs-12">
                    <h5>Horários da Clínica</h5>
                  </div>
                  {/* Cadastrar */}
                  <div className="flex-bottom no-flex-xs margin-bottom-20">
                    <div className="col-xs-12 col-md-3">
                      <label>Abertura</label>
                      <input type="tel" className="form-control input-hora" />
                    </div>
                    <div className="col-xs-12 col-md-3">
                      <label>Fechamento</label>
                      <input type="tel" className="form-control input-hora" />
                    </div>
                    <div className="col-xs-12 col-md-4">
                      <label>Dia da semana</label>
                      <select name id className="form-control">
                        <option value>...</option>
                        <option value>Segunda</option>
                        <option value>Terça</option>
                        <option value>Quarta</option>
                        <option value>Quinta</option>
                        <option value>Sexta</option>
                        <option value>Sábado</option>
                      </select>
                    </div>
                    <div className="col-xs-12 col-md-4">
                      <a href="#!" className="btn" data-toggle="tooltip" data-placement="bottom" data-original-title="Adicionar"><i className="fa fa-plus" /></a>
                    </div>
                  </div>
                  {/* Lista */}
                  <div className="flex-bottom no-flex-xs margin-bottom-5">
                    <div className="col-xs-12 col-md-3">
                      <input type="tel" className="form-control input-hora" defaultValue="08:00" />
                    </div>
                    <div className="col-xs-12 col-md-3">
                      <input type="tel" className="form-control input-hora" defaultValue="18:00" />
                    </div>
                    <div className="col-xs-12 col-md-4">
                      <select name id className="form-control">
                        <option value>...</option>
                        <option value selected>Segunda</option>
                        <option value>Terça</option>
                        <option value>Quarta</option>
                        <option value>Quinta</option>
                        <option value>Sexta</option>
                        <option value>Sábado</option>
                      </select>
                    </div>
                    <div className="col-xs-12 col-md-4">
                      <a href="#!" className="btn btn-line" data-toggle="tooltip" data-placement="bottom" data-original-title="Excluir"><i className="fa fa-trash" /></a>
                    </div>
                  </div>
                  {/* Lista */}
                  <div className="flex-bottom no-flex-xs margin-bottom-5">
                    <div className="col-xs-12 col-md-3">
                      <input type="tel" className="form-control input-hora" defaultValue="08:00" />
                    </div>
                    <div className="col-xs-12 col-md-3">
                      <input type="tel" className="form-control input-hora" defaultValue="18:00" />
                    </div>
                    <div className="col-xs-12 col-md-4">
                      <select name id className="form-control">
                        <option value>...</option>
                        <option value>Segunda</option>
                        <option value selected>Terça</option>
                        <option value>Quarta</option>
                        <option value>Quinta</option>
                        <option value>Sexta</option>
                        <option value>Sábado</option>
                      </select>
                    </div>
                    <div className="col-xs-12 col-md-4">
                      <a href="#!" className="btn btn-line" data-toggle="tooltip" data-placement="bottom" data-original-title="Excluir"><i className="fa fa-trash" /></a>
                    </div>
                  </div>
                  {/* Lista */}
                  <div className="flex-bottom no-flex-xs margin-bottom-5">
                    <div className="col-xs-12 col-md-3">
                      <input type="tel" className="form-control input-hora" defaultValue="08:00" />
                    </div>
                    <div className="col-xs-12 col-md-3">
                      <input type="tel" className="form-control input-hora" defaultValue="12:00" />
                    </div>
                    <div className="col-xs-12 col-md-4">
                      <select name id className="form-control">
                        <option value>...</option>
                        <option value>Segunda</option>
                        <option value>Terça</option>
                        <option value>Quarta</option>
                        <option value>Quinta</option>
                        <option value>Sexta</option>
                        <option value selected>Sábado</option>
                      </select>
                    </div>
                    <div className="col-xs-12 col-md-4">
                      <a href="#!" className="btn btn-line" data-toggle="tooltip" data-placement="bottom" data-original-title="Excluir"><i className="fa fa-trash" /></a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Box */}
              <div className="box-item-int">
                <div className="row">
                  <div className="col-xs-12">
                    <h5>Especialidades da Clínica</h5>
                  </div>
                  {/* Lista */}
                  <div className="col-xs-12 col-md-4">
                    <div className="check-custom">
                      <label>
                        <input type="checkbox" name defaultValue />
                        <i className="fa fa-square-o" /><i className="fa fa-check-square-o" />
                        Checkbox list
                      </label>
                    </div>
                    <div className="check-custom">
                      <label>
                        <input type="checkbox" name defaultValue />
                        <i className="fa fa-square-o" /><i className="fa fa-check-square-o" />
                        Checkbox list
                      </label>
                    </div>
                    <div className="check-custom">
                      <label>
                        <input type="checkbox" name defaultValue />
                        <i className="fa fa-square-o" /><i className="fa fa-check-square-o" />
                        Checkbox list
                      </label>
                    </div>
                    <div className="check-custom">
                      <label>
                        <input type="checkbox" name defaultValue />
                        <i className="fa fa-square-o" /><i className="fa fa-check-square-o" />
                        Checkbox list
                      </label>
                    </div>
                  </div>
                  <div className="col-xs-12 col-md-4">
                    <div className="check-custom">
                      <label>
                        <input type="checkbox" name defaultValue />
                        <i className="fa fa-square-o" /><i className="fa fa-check-square-o" />
                        Checkbox list
                      </label>
                    </div>
                    <div className="check-custom">
                      <label>
                        <input type="checkbox" name defaultValue />
                        <i className="fa fa-square-o" /><i className="fa fa-check-square-o" />
                        Checkbox list
                      </label>
                    </div>
                    <div className="check-custom">
                      <label>
                        <input type="checkbox" name defaultValue />
                        <i className="fa fa-square-o" /><i className="fa fa-check-square-o" />
                        Checkbox list
                      </label>
                    </div>
                    <div className="check-custom">
                      <label>
                        <input type="checkbox" name defaultValue />
                        <i className="fa fa-square-o" /><i className="fa fa-check-square-o" />
                        Checkbox list
                      </label>
                    </div>
                  </div>
                  <div className="col-xs-12 col-md-4">
                    <div className="check-custom">
                      <label>
                        <input type="checkbox" name defaultValue />
                        <i className="fa fa-square-o" /><i className="fa fa-check-square-o" />
                        Checkbox list
                      </label>
                    </div>
                    <div className="check-custom">
                      <label>
                        <input type="checkbox" name defaultValue />
                        <i className="fa fa-square-o" /><i className="fa fa-check-square-o" />
                        Checkbox list
                      </label>
                    </div>
                    <div className="check-custom">
                      <label>
                        <input type="checkbox" name defaultValue />
                        <i className="fa fa-square-o" /><i className="fa fa-check-square-o" />
                        Checkbox list
                      </label>
                    </div>
                    <div className="check-custom">
                      <label>
                        <input type="checkbox" name defaultValue />
                        <i className="fa fa-square-o" /><i className="fa fa-check-square-o" />
                        Checkbox list
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="margin-top-30">
                <button className="btn icon"><i className="fa fa-check" />Salvar</button>
              </div>
            </form>
          </div>
          );
    }
}
export default ModalClinica;
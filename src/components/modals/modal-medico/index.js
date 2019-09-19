import React, { Component } from 'react';
class ModalMedico extends Component {

    render(){
        return(
            <div id="modalMedico" className="fancybox">
              <div className="titulo-modal">
                <h2>Médico</h2>
              </div>
              <form action autoComplete="off">
                {/* Box */}
                <div className="box-item-int">
                  <div className="row">
                    <div className="col-xs-12">
                      <h5>Horários do Médico</h5>
                    </div>
                    {/* Cadastrar */}
                    <div className="flex-bottom no-flex-xs margin-bottom-20">
                      <div className="col-xs-12 col-sm-2">
                        <label>Entrada</label>
                        <input type="tel" className="form-control input-hora" />
                      </div>
                      <div className="col-xs-12 col-sm-3">
                        <label>Almoço</label>
                        <div className="flex group-input">
                          <input type="tel" className="form-control input-hora" />
                          <span>às</span>
                          <input type="tel" className="form-control input-hora" />
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-2">
                        <label>Saída</label>
                        <input type="tel" className="form-control input-hora" />
                      </div>
                      <div className="col-xs-12 col-sm-3">
                        <label>Dia da semana</label>
                        <select name="" id="" className="form-control">
                          <option value="">...</option>
                          <option value="">Segunda</option>
                          <option value="">Terça</option>
                          <option value="">Quarta</option>
                          <option value="">Quinta</option>
                          <option value="">Sexta</option>
                          <option value="">Sábado</option>
                        </select>
                      </div>
                      <div className="col-xs-12 col-sm-2">
                        <a href="javascript:0" className="btn" data-toggle="tooltip" data-placement="bottom" data-original-title="Adicionar"><i className="fa fa-plus" /></a>
                      </div>
                    </div>
                    {/* Lista */}
                    <div className="flex-bottom no-flex-xs margin-bottom-5">
                      <div className="col-xs-12 col-sm-2">
                        <input type="tel" className="form-control input-hora" defaultValue="08:00" />
                      </div>
                      <div className="col-xs-12 col-sm-3">
                        <div className="flex group-input">
                          <input type="tel" className="form-control input-hora" defaultValue="12:00" />
                          <span>às</span>
                          <input type="tel" className="form-control input-hora" defaultValue="14:00" />
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-2">
                        <input type="tel" className="form-control input-hora" defaultValue="20:00" />
                      </div>
                      <div className="col-xs-12 col-sm-3">
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
                      <div className="col-xs-12 col-sm-2">
                        <a href="javascript:0" className="btn btn-line" data-toggle="tooltip" data-placement="bottom" data-original-title="Excluir"><i className="fa fa-trash" /></a>
                      </div>
                    </div>
                    {/* Lista */}
                    <div className="flex-bottom no-flex-xs margin-bottom-5">
                      <div className="col-xs-12 col-sm-2">
                        <input type="tel" className="form-control input-hora" defaultValue="08:00" />
                      </div>
                      <div className="col-xs-12 col-sm-3">
                        <div className="flex group-input">
                          <input type="tel" className="form-control input-hora" defaultValue="12:00" />
                          <span>às</span>
                          <input type="tel" className="form-control input-hora" defaultValue="14:00" />
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-2">
                        <input type="tel" className="form-control input-hora" defaultValue="20:00" />
                      </div>
                      <div className="col-xs-12 col-sm-3">
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
                      <div className="col-xs-12 col-sm-2">
                        <a href="javascript:0" className="btn btn-line" data-toggle="tooltip" data-placement="bottom" data-original-title="Excluir"><i className="fa fa-trash" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Box */}
                <div className="box-item-int">
                  <div className="row">
                    <div className="col-xs-12">
                      <h5>Especialidades do Médico</h5>
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
            </div>);
    }
}
export default ModalMedico;
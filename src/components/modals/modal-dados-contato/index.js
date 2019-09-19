import React, { Component } from "react";
class ModalDadosContato extends Component {
  render() {
    return (
      <div id="modalDadosContato" className="fancybox">
        <div className="titulo-modal">
          <h2>Cadastrar contato</h2>
        </div>
        <form action autoComplete="off">
          {/* Box */}
          <div className="box-item-int">
            <div className="row">
              <div className="col-xs-12">
                <h5>Telefone</h5>
              </div>
              {/* Cadastrar */}
              <div className="flex-bottom no-flex-xs margin-bottom-20">
                <div className="col-xs-12 col-md-4">
                  <label>Selecione o tipo</label>
                  <select name id className="form-control">
                    <option value>...</option>
                    <option value>Telefone comercial</option>
                    <option value>Celular</option>
                  </select>
                </div>
                <div className="col-xs-12 col-md-4">
                  <label>Número</label>
                  <input type="tel" className="form-control input-tel" />
                </div>
                <div className="col-xs-12 col-md-4">
                  <a href="javascript:0" className="btn" data-toggle="tooltip" data-placement="bottom" data-original-title="Adicionar"><i className="fa fa-plus" /></a>
                </div>
              </div>
              {/* Lista */}
              <div className="flex-bottom no-flex-xs margin-bottom-5">
                <div className="col-xs-12 col-md-4">
                  <select name id className="form-control">
                    <option value>...</option>
                    <option value selected>Telefone comercial</option>
                    <option value>Celular</option>
                  </select>
                </div>
                <div className="col-xs-12 col-md-4">
                  <input type="tel" className="form-control input-tel" defaultValue="(99) 9999-9999" />
                </div>
                <div className="col-xs-12 col-md-4">
                  <a href="javascript:0" className="btn btn-line" data-toggle="tooltip" data-placement="bottom" data-original-title="Excluir"><i className="fa fa-trash" /></a>
                </div>
              </div>
              {/* Lista */}
              <div className="flex-bottom no-flex-xs margin-bottom-5">
                <div className="col-xs-12 col-md-4">
                  <select name id className="form-control">
                    <option value>...</option>
                    <option value selected>Telefone comercial</option>
                    <option value>Celular</option>
                  </select>
                </div>
                <div className="col-xs-12 col-md-4">
                  <input type="tel" className="form-control input-tel" defaultValue="(99) 9999-9999" />
                </div>
                <div className="col-xs-12 col-md-4">
                  <a href="javascript:0" className="btn btn-line" data-toggle="tooltip" data-placement="bottom" data-original-title="Excluir"><i className="fa fa-trash" /></a>
                </div>
              </div>
            </div>
          </div>
          {/* Box */}
          <div className="box-item-int">
            <div className="row">
              <div className="col-xs-12">
                <h5>E-mail</h5>
              </div>
              {/* Cadastrar */}
              <div className="flex-bottom no-flex-xs margin-bottom-20">
                <div className="col-xs-12 col-md-4">
                  <label>Selecione o tipo</label>
                  <select name id className="form-control">
                    <option value>...</option>
                    <option value>Contato</option>
                    <option value>Consultas</option>
                  </select>
                </div>
                <div className="col-xs-12 col-md-4">
                  <label>E-mail</label>
                  <input type="email" className="form-control" />
                </div>
                <div className="col-xs-12 col-md-4">
                  <a href="javascript:0" className="btn" data-toggle="tooltip" data-placement="bottom" data-original-title="Adicionar"><i className="fa fa-plus" /></a>
                </div>
              </div>
              {/* Lista */}
              <div className="flex-bottom no-flex-xs margin-bottom-5">
                <div className="col-xs-12 col-md-4">
                  <select name id className="form-control">
                    <option value>...</option>
                    <option value>Contato</option>
                    <option value selected>Consultas</option>
                  </select>
                </div>
                <div className="col-xs-12 col-md-4">
                  <input type="email" className="form-control" defaultValue="email@email.com" />
                </div>
                <div className="col-xs-12 col-md-4">
                  <a href="javascript:0" className="btn btn-line" data-toggle="tooltip" data-placement="bottom" data-original-title="Excluir"><i className="fa fa-trash" /></a>
                </div>
              </div>
              {/* Lista */}
              <div className="flex-bottom no-flex-xs margin-bottom-5">
                <div className="col-xs-12 col-md-4">
                  <select name id className="form-control">
                    <option value>...</option>
                    <option value>Contato</option>
                    <option value selected>Consultas</option>
                  </select>
                </div>
                <div className="col-xs-12 col-md-4">
                  <input type="email" className="form-control" defaultValue="email@email.com" />
                </div>
                <div className="col-xs-12 col-md-4">
                  <a href="javascript:0" className="btn btn-line" data-toggle="tooltip" data-placement="bottom" data-original-title="Excluir"><i className="fa fa-trash" /></a>
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
export default ModalDadosContato;

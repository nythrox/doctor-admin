import React, { Component } from 'react';
import Breadcrumbs from '../../../components/breadcrumbs';
class UsuariosImportarCsvInt extends Component {

    render(){
        return(
          <div className="page-content-wrapper">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xs-12">
                  {/* breadcrumb */}
                  <Breadcrumbs/>
                  <div className="title">
                    <h1>Importar</h1>
                  </div>
                  <form action autoComplete="off">
                    <div className="row">
                      <div className="col-xs-12">
                        <h6>Identifique as colunas de seu arquivo .CSV com a base de dados do sistema.</h6>
                      </div>
                      {/* Lista */}
                      <div className="col-xs-12">
                        <div className="box-scroll-h js-scrollbar-h">
                          {/* editar */}
                          <div className="item boxHeight">
                            <div className="box-top editar">
                              <h5>Coluna:</h5>
                              <select name id className="form-control">
                                <option value>Selecionar</option>
                                <option value>Item</option>
                                <option value>Item</option>
                              </select>
                              <div className="group-btn">
                                <div className="col-xs-6 nopadding">
                                  <a href="#!" className="btn btn-2 btn-small btn-block">Salvar</a>
                                </div>
                                <div className="col-xs-6 nopadding">
                                  <a href="#!" className="btn-link">Cancelar</a>
                                </div>
                              </div>
                            </div>
                            <div className="box-bottom">
                              <ul className="list-unstyled list">
                                <li className="txt-header">NOME</li>
                                <li>Clyde Moody</li>
                                <li>Nora Copeland</li>
                                <li>Erik Rodgers</li>
                                <li>Phoebe Henry</li>
                              </ul>
                            </div>
                          </div>
                          <div className="item boxHeight">
                            <div className="box-top">
                              <h6>E-MAIL</h6>
                              <p>Nenhuma coluna especificada</p>
                              <div className="group-btn">
                                <a href="#!" className="btn-link">Editar</a>
                                <a href="#!" className="btn-link">Ignorar</a>
                              </div>
                            </div>
                            <div className="box-bottom">
                              <ul className="list-unstyled list">
                                <li className="txt-header">E-MAIL</li>
                                <li>destini.zboncak@yahoo.com</li>
                                <li>jessy_crist@yessenia.biz</li>
                                <li>hermiston_noel@andreane.io</li>
                                <li>little_jessyca@hammes.biz</li>
                              </ul>
                            </div>
                          </div>
                          <div className="item boxHeight">
                            <div className="box-top">
                              <h6>SEXO</h6>
                              <p>Nenhuma coluna especificada</p>
                              <div className="group-btn">
                                <a href="#!" className="btn-link">Editar</a>
                                <a href="#!" className="btn-link">Ignorar</a>
                              </div>
                            </div>
                            <div className="box-bottom">
                              <ul className="list-unstyled list">
                                <li className="txt-header">SEXO</li>
                                <li>Feminino</li>
                                <li>Feminino</li>
                                <li>Masculino</li>
                                <li>M</li>
                              </ul>
                            </div>
                          </div>
                          <div className="item boxHeight">
                            <div className="box-top">
                              <h6>ANO</h6>
                              <p>Nenhuma coluna especificada</p>
                              <div className="group-btn">
                                <a href="#!" className="btn-link">Editar</a>
                                <a href="#!" className="btn-link">Ignorar</a>
                              </div>
                            </div>
                            <div className="box-bottom">
                              <ul className="list-unstyled list">
                                <li className="txt-header">ANO DE NASCIMENTO</li>
                                <li>1900</li>
                                <li>2003</li>
                                <li>1989</li>
                                <li>&nbsp;</li>
                              </ul>
                            </div>
                          </div>
                          <div className="item boxHeight">
                            <div className="box-top">
                              <h6>CIDADE</h6>
                              <p>Não será importado</p>
                              <div className="group-btn">
                                <a href="#!" className="btn-link">Editar</a>
                              </div>
                            </div>
                            <div className="box-bottom">
                              <ul className="list-unstyled list">
                                <li className="txt-header">&nbsp;</li>
                                <li>&nbsp;</li>
                                <li>&nbsp;</li>
                                <li>&nbsp;</li>
                                <li>&nbsp;</li>
                              </ul>
                            </div>
                          </div>
                          <div className="item boxHeight">
                            <div className="box-top vazio">
                              {/* vazio */}
                            </div>
                            <div className="box-bottom">
                              <ul className="list-unstyled list">
                                <li className="txt-header">ESTADO</li>
                                <li>SP</li>
                                <li>MG</li>
                                <li>1989</li>
                                <li>M</li>
                              </ul>
                            </div>
                          </div>
                          <div className="item boxHeight">
                            <div className="box-top vazio">
                              {/* vazio */}
                            </div>
                            <div className="box-bottom">
                              <ul className="list-unstyled list">
                                <li className="txt-header">ESTADO</li>
                                <li>SP</li>
                                <li>MG</li>
                                <li>1989</li>
                                <li>M</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-12">
                        <div className="form-group margin-top-30">
                          <a href="#!" className="btn btn-small">Importar »</a>
                        </div>
                        <div className="form-group">
                          <div className="box-carregando" style={{display: 'block'}}>
                            <span className="flex">
                              <i className="fa fa-spinner fa-pulse" /> Importando
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          );
    }
}
export default UsuariosImportarCsvInt;
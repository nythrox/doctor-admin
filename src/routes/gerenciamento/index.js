import React, { Component } from 'react';
import Breadcrumbs from '../../components/breadcrumbs';
import Avatar from '../../assets/img/avatar.jpg';
class Gerenciamento extends Component {

    render(){
        return(
          <div className="page-content-wrapper">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xs-12">
                  {/* breadcrumb */}
                  <Breadcrumbs/>
                  <div className="title title flex-space no-flex-md">
                    <h1>Título da página</h1>
                  </div>
                  <div className="top-cabecalho">
                    <div className="flex-space no-flex-sm">
                      <div className="left">
                        <h2>Adicionar usuários</h2>
                      </div>
                      <div className="right">
                        <div className="flex group-btn">
                          <a href="javascript:0" className="btn icon"><i className="fa fa-user-plus" />Adicionar a Lista</a>
                          <a href="javascript:0" className="btn btn-line icon"><i className="fa fa-user-times" />Remover da Lista</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <form action autoComplete="off">
                    <div className="header-tabela">
                      <div className="right">
                        <div className="box-search">
                          <input type="text" className="form-control" placeholder="Busca na lista" />
                          <a href="javascript:0" className="icon"><i className="fa fa-search" /></a>
                        </div>
                      </div>
                    </div>
                    <table className="tabela-padrao check-custom">
                      <thead>
                        <tr>
                          <th className="text-center">&nbsp;</th>
                          <th className="col-xs-3 text-left">Usuário <a href="javascript:0" className="btn-ordenar" /></th>
                          <th className="col-xs-2 text-left">E-mail <a href="javascript:0" className="btn-ordenar" /></th>
                          <th className="col-xs-2 text-left">Grupo <a href="javascript:0" className="btn-ordenar" /></th>
                          <th className="col-xs-3 text-left">Status <a href="javascript:0" className="btn-ordenar" /></th>
                          <th className="col-xs-2 text-right">&nbsp;</th>
                          <th className="text-right">
                            <label>
                              <input type="checkbox" name defaultValue />
                              <i className="fa fa-square-o" /><i className="fa fa-check-square-o" />
                            </label>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="visible-xs visible-sm">Item</td>
                          <td className="text-center nopadding box-move"><span className="btn-move" /></td>
                          <td data-th="Usuário" className="text-left">
                            <a href="javascript:0">
                              <div className="avatar">
                                <img className="img-responsive" src={Avatar} alt="Nome" />
                                <strong>Dr. João Antunes</strong>
                              </div>
                            </a>
                          </td>
                          <td data-th="E-mail" className="text-left">joao@conectamedico.com.br</td>
                          <td data-th="Grupo" className="text-left"><strong>Médico</strong></td>
                          <td data-th="Status" className="text-left">Ativo desde 12/05/2017</td>
                          <td data-th="Check" className="text-right">
                            <div className="dropdown btn-dropdown btn-small btn-line">
                              <a href="javascript:0" className="icon"><i className="fa fa-check" />Em minha lista</a>
                              <a href="javascript:0" className="btn dropdown-toggle" data-toggle="dropdown">
                                <i className="fa fa-caret-down" />
                              </a>
                              <ul className="dropdown-menu">
                                <li><a href="javascript:0">Gerenciar acesso</a></li>
                                <li role="separator" className="divider" />
                                <li><a href="javascript:0">Excluir de minha lista</a></li>
                              </ul>
                            </div>
                          </td>
                          <td data-th="Excluir" className="text-right">
                            <label>
                              <input type="checkbox" name defaultValue />
                              <i className="fa fa-square-o" /><i className="fa fa-check-square-o" />
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td className="visible-xs visible-sm">Item</td>
                          <td className="text-center nopadding box-move"><span className="btn-move" /></td>
                          <td data-th="Usuário" className="text-left">
                            <a href="javascript:0">
                              <div className="avatar">
                                <img className="img-responsive" src={Avatar} alt="Nome" />
                                <strong>Dr. João Antunes</strong>
                              </div>
                            </a>
                          </td>
                          <td data-th="E-mail" className="text-left">joao@conectamedico.com.br</td>
                          <td data-th="Grupo" className="text-left"><strong>Médico</strong></td>
                          <td data-th="Status" className="text-left">Ativo desde 12/05/2017</td>
                          <td data-th="Check" className="text-right">
                            <div className="dropdown btn-dropdown btn-small btn-line">
                              <a href="javascript:0" className="icon"><i className="fa fa-check" />Em minha lista</a>
                              <a href="javascript:0" className="btn dropdown-toggle" data-toggle="dropdown">
                                <i className="fa fa-caret-down" />
                              </a>
                              <ul className="dropdown-menu">
                                <li><a href="javascript:0">Gerenciar acesso</a></li>
                                <li role="separator" className="divider" />
                                <li><a href="javascript:0">Excluir de minha lista</a></li>
                              </ul>
                            </div>
                          </td>
                          <td data-th="Excluir" className="text-right">
                            <label>
                              <input type="checkbox" name defaultValue />
                              <i className="fa fa-square-o" /><i className="fa fa-check-square-o" />
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td className="visible-xs visible-sm">Item</td>
                          <td className="text-center nopadding box-move"><span className="btn-move" /></td>
                          <td data-th="Usuário" className="text-left">
                            <a href="javascript:0">
                              <div className="avatar">
                                <img className="img-responsive" src={Avatar} alt="Nome" />
                                <strong>Dr. João Antunes</strong>
                              </div>
                            </a>
                          </td>
                          <td data-th="E-mail" className="text-left">joao@conectamedico.com.br</td>
                          <td data-th="Grupo" className="text-left"><strong>Médico</strong></td>
                          <td data-th="Status" className="text-left">Ativo desde 12/05/2017</td>
                          <td data-th="Check" className="text-right">
                            <div className="dropdown btn-dropdown btn-small btn-line">
                              <a href="javascript:0" className="icon"><i className="fa fa-check" />Em minha lista</a>
                              <a href="javascript:0" className="btn dropdown-toggle" data-toggle="dropdown">
                                <i className="fa fa-caret-down" />
                              </a>
                              <ul className="dropdown-menu">
                                <li><a href="javascript:0">Gerenciar acesso</a></li>
                                <li role="separator" className="divider" />
                                <li><a href="javascript:0">Excluir de minha lista</a></li>
                              </ul>
                            </div>
                          </td>
                          <td data-th="Excluir" className="text-right">
                            <label>
                              <input type="checkbox" name defaultValue />
                              <i className="fa fa-square-o" /><i className="fa fa-check-square-o" />
                            </label>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                  <form action autoComplete="off">
                    <div className="header-tabela margin-top-60">
                      <div className="right">
                        <div className="box-search">
                          <input type="text" className="form-control" placeholder="Busca na lista" />
                          <a href="javascript:0" className="icon"><i className="fa fa-search" /></a>
                        </div>
                      </div>
                    </div>
                    <table className="tabela-padrao check-custom">
                      <thead>
                        <tr>
                          <th className="text-center">&nbsp;</th>
                          <th className="col-xs-4 text-left">Paciente <a href="javascript:0" className="btn-ordenar" /></th>
                          <th className="col-xs-2 text-right">&nbsp;</th>
                          <th className="col-xs-2 text-right">&nbsp;</th>
                          <th className="col-xs-4 text-left">CPF <a href="javascript:0" className="btn-ordenar" /></th>
                          <th className="text-right">
                            <label>
                              <input type="checkbox" name defaultValue />
                              <i className="fa fa-square-o" /><i className="fa fa-check-square-o" />
                            </label>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="visible-xs visible-sm">Item</td>
                          <td className="text-center nopadding box-move"><span className="btn-move" /></td>
                          <td data-th="Paciente" className="text-left">
                            <a href="javascript:0">
                              <div className="avatar">
                                <img className="img-responsive" src={Avatar} alt="Nome" />
                                <strong>Juliana Cunha</strong>
                              </div>
                            </a>
                          </td>
                          <td data-th="E-mail" className="text-left">juliana@gmail.com.br</td>
                          <td data-th="Telefone" className="text-left">11 93758-6830</td>
                          <td data-th="CPF" className="text-left">401.886.818-78</td>
                          <td data-th="Excluir" className="text-right">
                            <label>
                              <input type="checkbox" name defaultValue />
                              <i className="fa fa-square-o" /><i className="fa fa-check-square-o" />
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td className="visible-xs visible-sm">Item</td>
                          <td className="text-center nopadding box-move"><span className="btn-move" /></td>
                          <td data-th="Paciente" className="text-left">
                            <a href="javascript:0">
                              <div className="avatar">
                                <img className="img-responsive" src={Avatar} alt="Nome" />
                                <strong>Juliana Cunha</strong>
                              </div>
                            </a>
                          </td>
                          <td data-th="E-mail" className="text-left">juliana@gmail.com.br</td>
                          <td data-th="Telefone" className="text-left">11 93758-6830</td>
                          <td data-th="CPF" className="text-left">401.886.818-78</td>
                          <td data-th="Excluir" className="text-right">
                            <label>
                              <input type="checkbox" name defaultValue />
                              <i className="fa fa-square-o" /><i className="fa fa-check-square-o" />
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td className="visible-xs visible-sm">Item</td>
                          <td className="text-center nopadding box-move"><span className="btn-move" /></td>
                          <td data-th="Paciente" className="text-left">
                            <a href="javascript:0">
                              <div className="avatar">
                                <img className="img-responsive" src={Avatar} alt="Nome" />
                                <strong>Juliana Cunha</strong>
                              </div>
                            </a>
                          </td>
                          <td data-th="E-mail" className="text-left">juliana@gmail.com.br</td>
                          <td data-th="Telefone" className="text-left">11 93758-6830</td>
                          <td data-th="CPF" className="text-left">401.886.818-78</td>
                          <td data-th="Excluir" className="text-right">
                            <label>
                              <input type="checkbox" name defaultValue />
                              <i className="fa fa-square-o" /><i className="fa fa-check-square-o" />
                            </label>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
              </div>
            </div>
          </div>
          );
    }
}
export default Gerenciamento;
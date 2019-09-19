import React, { Component } from 'react';
import Breadcrumbs from '../../components/breadcrumbs';
import Avatar from '../../assets/img/avatar.jpg';
class Calendario extends Component {

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
                        <div className="group-star">
                          <div className="flex">
                            <span className="box-star">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star vazio" />
                            </span>
                            <a href="javascript:0" className="btn-link">(Ver avaliações)</a>
                          </div>
                        </div>
                      </div>
                      <div className="right">
                        <div className="flex no-flex-xs group-btn">
                          <a href="javascript:0" className="btn-link">Publicar Notícias</a>
                          <div className="dropdown btn-dropdown btn-2">
                            <a href="javascript:0" className="icon"><i className="fa fa-pencil-square-o" />Editar informações</a>
                            <a href="javascript:0" className="btn dropdown-toggle" data-toggle="dropdown">
                              <i className="fa fa-caret-down" />
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="javascript:0">Gerenciar usuários</a></li>
                              <li><a href="javascript:0">Gerenciar pacientes</a></li>
                              <li role="separator" className="divider" />
                              <li><a href="./">Sair</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="box-filtro">
                    <div className="row">
                      <form action autoComplete="off">
                        <div className="col-xs-12 col-md-6 col-lg-2">
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="N. Consulta" />
                          </div>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-2">
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Paciente" />
                          </div>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-2">
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Médico" />
                          </div>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-2">
                          <div className="form-group">
                            <select name id className="form-control">
                              <option value>Especialidade</option>
                              <option value>Item</option>
                              <option value>Item</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-2">
                          <div className="form-group">
                            <select name id className="form-control">
                              <option value>Status</option>
                              <option value>Item</option>
                              <option value>Item</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-2">
                          <button className="btn btn-line btn-block icon" disabled="disabled"><i className="fa fa-plus" />Filtrar</button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <form action autoComplete="off">
                    {/* header */}
                    <div className="header-tabela">
                      <div className="flex-space no-flex-md">
                        <div className="left">
                          <div className="flex">
                            <div className="btn-nav">
                              <a href="javascript:0" className="nav-prev"><i className="fa fa-caret-left" /></a>
                              <span className="divider-btn" />
                              <a href="javascript:0" className="nav-next"><i className="fa fa-caret-right" /></a>
                            </div>
                            <a href="javascript:0" className="btn-icon btn-icon-line">
                              <i className="fa fa-calendar" />
                            </a>
                            <h4>23 - 30 de Outubro, 2017</h4>
                          </div>
                        </div>
                        <div className="right group-btn">
                          <a href="javascript:0" className="btn icon"><i className="fa fa-calendar-plus-o" />Agendar Consulta</a>
                          <a href="javascript:0" className="btn btn-line icon"><i className="fa fa-plus" />Cancelar Consulta</a>
                        </div>
                      </div>
                    </div>
                    <table className="tabela-padrao check-custom tabela-big">
                      <thead>
                        <tr>
                          <th className="text-center">&nbsp;</th>
                          <th className="text-left">Horário <a href="javascript:0" className="btn-ordenar" /></th>
                          <th className="text-left">N. Consulta <a href="javascript:0" className="btn-ordenar maior" /></th>
                          <th className="text-left">Paciente <a href="javascript:0" className="btn-ordenar menor" /></th>
                          <th className="text-left">&nbsp;</th>
                          <th className="text-left">Médico <a href="javascript:0" className="btn-ordenar" /></th>
                          <th className="text-left">Especialidade <a href="javascript:0" className="btn-ordenar" /></th>
                          <th className="text-left">Status <a href="javascript:0" className="btn-ordenar" /></th>
                          <th className="text-right">
                            <label>
                              <input type="checkbox" name defaultValue />
                              <i className="fa fa-square-o" /><i className="fa fa-check-square-o" />
                            </label>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="destaque-1">
                          <td colSpan={7} className="text-left"><strong>Segunda-Feira</strong></td>
                          <td className="text-right"><strong>23 de Outubro de 2017</strong></td>
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
                          <td data-th="Horário" className="text-left">10:30 - 11:30</td>
                          <td data-th="N. Consulta" className="text-left"><a href="javascript:0">#8496996</a></td>
                          <td data-th="Paciente" className="text-left">
                            <div className="avatar">
                              <img className="img-responsive" src={Avatar} alt="Nome" />
                              <strong>Juliana Cunha</strong>
                            </div>
                          </td>
                          <td data-th="Telefone" className="text-left">11 93758-6830</td>
                          <td data-th="Médico" className="text-left"><strong>João Antunes</strong></td>
                          <td data-th="Especialidade" className="text-left">Oftalmologia</td>
                          <td data-th="Status" className="text-left">
                            <div className="status status-2">
                              <i className="fa fa-circle" /> Status 2
                            </div>
                          </td>
                          <td data-th="Excluir" className="text-right">
                            <label>
                              <input type="checkbox" name defaultValue />
                              <i className="fa fa-square-o" /><i className="fa fa-check-square-o" />
                            </label>
                          </td>
                        </tr>
                        <tr className="destaque-2">
                          <td className="visible-xs visible-sm">Item</td>
                          <td className="text-center nopadding box-move"><span className="btn-move" /></td>
                          <td data-th="Horário" className="text-left">10:30 - 11:30</td>
                          <td data-th="N. Consulta" className="text-left"><a href="javascript:0">#8496996</a></td>
                          <td data-th="Paciente" className="text-left">
                            <div className="avatar">
                              <img className="img-responsive" src={Avatar} alt="Nome" />
                              <strong>Juliana Cunha</strong>
                            </div>
                          </td>
                          <td data-th="Telefone" className="text-left">11 93758-6830</td>
                          <td data-th="Médico" className="text-left"><strong>João Antunes</strong></td>
                          <td data-th="Especialidade" className="text-left">Oftalmologia</td>
                          <td data-th="Status" className="text-left">
                            <div className="dropdown btn-dropdown btn-small btn-2">
                              <a href="javascript:0" className="icon"><i className="fa fa-calendar-check-o" />Confirmar</a>
                              <a href="javascript:0" className="btn dropdown-toggle" data-toggle="dropdown">
                                <i className="fa fa-caret-down" />
                              </a>
                              <ul className="dropdown-menu">
                                <li><a href="javascript:0" className="icon"><i className="fa fa-calendar-times-o" />Cancelar</a></li>
                                <li role="separator" className="divider" />
                                <li><a href="./" className="icon"><i className="fa fa-calendar" />Reagendar</a></li>
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
                          <td data-th="Horário" className="text-left">10:30 - 11:30</td>
                          <td data-th="N. Consulta" className="text-left"><a href="javascript:0">#8496996</a></td>
                          <td data-th="Paciente" className="text-left">
                            <div className="avatar">
                              <img className="img-responsive" src={Avatar} alt="Nome" />
                              <strong>Juliana Cunha</strong>
                            </div>
                          </td>
                          <td data-th="Telefone" className="text-left">11 93758-6830</td>
                          <td data-th="Médico" className="text-left"><strong>João Antunes</strong></td>
                          <td data-th="Especialidade" className="text-left">Oftalmologia</td>
                          <td data-th="Status" className="text-left">
                            <div className="status status-5">
                              <i className="fa fa-circle" /> Status 5
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
                    {/* Status */}
                    <div className="box-filtro-status">
                      <div className="flex-space no-flex-sm">
                        <div className="item status status-1">
                          <div className="flex">
                            <i className="fa fa-circle" />
                            <a href="javascript:0" className="nome">Confirmada</a>
                          </div>
                        </div>
                        <div className="item status status-2">
                          <div className="flex">
                            <i className="fa fa-circle" />
                            <a href="javascript:0" className="nome">Pós Consulta</a>
                          </div>
                        </div>
                        <div className="item status status-3">
                          <div className="flex">
                            <i className="fa fa-circle" />
                            <a href="javascript:0" className="nome">Em Consulta</a>
                          </div>
                        </div>
                        <div className="item status status-4">
                          <div className="flex">
                            <i className="fa fa-circle" />
                            <a href="javascript:0" className="nome">Consulta Finalizada</a>
                          </div>
                        </div>
                        <div className="item status status-5">
                          <div className="flex">
                            <i className="fa fa-circle" />
                            <a href="javascript:0" className="nome">Consulta Reagendada</a>
                          </div>
                        </div>
                        <div className="item status status-6">
                          <div className="flex">
                            <i className="fa fa-circle" />
                            <a href="javascript:0" className="nome">Consulta Cancelada</a>
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
export default Calendario;
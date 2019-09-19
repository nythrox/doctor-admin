import React, { Component } from 'react';
import Prescricao from '../../../assets/img/icon-prescricao.svg';
import Lembrete from '../../../assets/img/icon-lembrete.svg';
import Breadcrumbs from '../../../components/breadcrumbs';
class TemplateEditar extends Component {

    render(){
        return(
          <div className="page-content-wrapper">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xs-12">
                  {/* breadcrumb */}
                  <Breadcrumbs/>
                  <div className="title">
                    <h1>Template</h1>
                    <div className="alert alert-info alert-dismissible" role="alert">
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
                      Campos com <strong>*</strong> são obrigatórios.
                    </div>
                  </div>
                  <form action className="form-vertical" autoComplete="off">
                    <div className="box-item-int">
                      <div className="row">
                        <div className="col-xs-12 margin-bottom-30">
                          <div className="form-group">
                            <label>Nome do template <span>*</span></label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        {/* Left */}
                        <div className="col-xs-12 col-lg-6">
                          <div className="titulo-icon">
                            <img className="img-responsive" src={Prescricao} alt="Prescrição" /><h3>Prescrição</h3>
                          </div>
                          {/* tabela 01 */}
                          <table className="tabela-padrao">
                            <thead>
                              <tr>
                                <th className="text-center">&nbsp;</th>
                                <th className="col-xs-4 col-lg-5 text-left">Medicamento <a href="javascript:0" className="btn-ordenar" /></th>
                                <th className="col-xs-8 col-lg-7 text-left">Observação</th>
                                <th className="text-right"><a href="javascript:0" className="btn btn-small-header">Limpar tudo</a></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="visible-xs visible-sm">Item</td>
                                <td className="text-center"><a href="javascript:0"><i className="fa fa-pencil-square-o" /></a></td>
                                <td data-th="Medicamento" className="text-left"><a href="javascript:0">Paracetamol</a></td>
                                <td data-th="Observação" className="text-left">Tomar 1 comprimido a cada 1 hora durante 5 horas</td>
                                <td data-th="Excluir" className="text-right"><a href="javascript:0"><i className="fa fa-trash" /></a></td>
                              </tr>
                              <tr>
                                <td className="visible-xs visible-sm">Item</td>
                                <td className="text-center"><a href="javascript:0"><i className="fa fa-pencil-square-o" /></a></td>
                                <td data-th="Medicamento" className="text-left"><a href="javascript:0">Paracetamol</a></td>
                                <td data-th="Observação" className="text-left">Tomar 1 comprimido a cada 1 hora durante 5 horas</td>
                                <td data-th="Excluir" className="text-right"><a href="javascript:0"><i className="fa fa-trash" /></a></td>
                              </tr>
                              <tr>
                                <td colSpan={4} className="text-center clean">
                                  <a href="javascript:0" className="btn-link icon js-add-prescricao"><i className="fa fa-plus" />Adicionar Prescrição</a>
                                </td>
                              </tr>
                              {/* box js prescrição */}
                              <tr id="addPrescricao" style={{display: 'none'}}>
                                <td colSpan={4} className="clean">
                                  <div className="row">
                                    <div className="form-tabela">
                                      <div className="flex-space no-flex-sm">
                                        <div className="col-xs-12 col-md-8">
                                          <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Medicamento" />
                                          </div>
                                        </div>
                                        <div className="col-xs-12 col-md-4">
                                          <div className="form-group text-right">
                                            <a href="javascript:0" className="btn-link icon"><i className="fa fa-plus" />Ver prescrições salvas</a>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-xs-12 col-md-4">
                                        <div className="form-group">
                                          <input type="text" className="form-control" placeholder="Apresentação" />
                                        </div>
                                      </div>
                                      <div className="col-xs-12 col-md-4">
                                        <div className="form-group">
                                          <input type="text" className="form-control" placeholder="Qual intervalo?" />
                                        </div>
                                      </div>
                                      <div className="col-xs-12 col-md-4">
                                        <div className="form-group">
                                          <input type="text" className="form-control" placeholder="Quantos dias?" />
                                        </div>
                                      </div>
                                      <div className="col-xs-12">
                                        <div className="form-group">
                                          <textarea name id className="form-control" placeholder="Observações" defaultValue={""} />
                                        </div>
                                      </div>
                                      <div className="col-xs-12">
                                        <div className="group-btn right">
                                          <a href="javascript:0" className="btn btn-small btn-line icon"><i className="fa fa-plus" />Salvar e Adicionar</a>
                                          <a href="javascript:0" className="btn btn-small icon"><i className="fa fa-plus" />Adicionar Prescrição</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        {/* Right */}
                        <div className="col-xs-12 col-lg-6">
                          <div className="titulo-icon">
                            <img className="img-responsive" src={Lembrete} alt="Lembrete" /><h3>Lembrete</h3>
                          </div>
                          {/* tabela 02 */}
                          <table className="tabela-padrao">
                            <thead>
                              <tr>
                                <th className="text-center">&nbsp;</th>
                                <th className="col-xs-12 text-left">Lembrete</th>
                                <th className="text-right"><a href="javascript:0" className="btn btn-small-header">Limpar tudo</a></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td colSpan={4} className="text-center">
                                  <a href="javascript:0" className="btn-link btn-link-small icon">Ver antigos</a>
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center"><a href="javascript:0"><i className="fa fa-pencil-square-o" /></a></td>
                                <td data-th="Lembrete" className="text-left">
                                  Tomar 1 comprimido a cada 1 hora durante 5 horas<br />
                                  <legend>27/10/2017 às 17:00 até 27/12/2017</legend>
                                </td>
                                <td data-th="Excluir" className="text-right"><a href="javascript:0"><i className="fa fa-trash" /></a></td>
                              </tr>
                              <tr>
                                <td className="text-center"><a href="javascript:0"><i className="fa fa-pencil-square-o" /></a></td>
                                <td data-th="Lembrete" className="text-left">
                                  Tomar 1 comprimido a cada 1 hora durante 5 horas<br />
                                  <legend>27/10/2017 às 17:00 até 27/12/2017</legend>
                                </td>
                                <td data-th="Excluir" className="text-right"><a href="javascript:0"><i className="fa fa-trash" /></a></td>
                              </tr>
                              <tr>
                                <td colSpan={4} className="text-center clean">
                                  <a href="javascript:0" className="btn-link icon js-add-lembrete"><i className="fa fa-plus" />Adicionar Lembrete</a>
                                </td>
                              </tr>
                              {/* box js lembrete */}
                              <tr id="addLembrete" style={{display: 'none'}}>
                                <td colSpan={4} className="clean">
                                  <div className="row">
                                    <form action autoComplete="off">
                                      <div className="form-tabela">
                                        <div className="flex-space no-flex-sm">
                                          <div className="col-xs-12 col-md-8">
                                            <div className="form-group">
                                              <input type="text" className="form-control" placeholder="Medicamento" />
                                            </div>
                                          </div>
                                          <div className="col-xs-12 col-md-4">
                                            <div className="form-group text-right">
                                              <a href="javascript:0" className="btn-link icon"><i className="fa fa-plus" />Ver prescrições salvas</a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-xs-12 col-md-4">
                                          <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Apresentação" />
                                          </div>
                                        </div>
                                        <div className="col-xs-12 col-md-4">
                                          <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Qual intervalo?" />
                                          </div>
                                        </div>
                                        <div className="col-xs-12 col-md-4">
                                          <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Quantos dias?" />
                                          </div>
                                        </div>
                                        <div className="col-xs-12">
                                          <div className="form-group">
                                            <textarea name id className="form-control" placeholder="Observações" defaultValue={""} />
                                          </div>
                                        </div>
                                        <div className="col-xs-12">
                                          <div className="group-btn right">
                                            <a href="javascript:0" className="btn btn-small btn-line icon"><i className="fa fa-plus" />Salvar e Adicionar</a>
                                            <a href="javascript:0" className="btn btn-small icon"><i className="fa fa-plus" />Adicionar Prescrição</a>
                                          </div>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="box-btn-footer">
                      <button className="btn btn-large icon"><i className="fa fa-check" />Salvar</button>
                    </div>
                  </form></div>
              </div>
            </div>
          </div>
          );
    }
}
export default TemplateEditar;
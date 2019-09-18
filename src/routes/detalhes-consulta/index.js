import React, { Component } from 'react';
import Breadcrumbs from '../../components/breadcrumbs';
import Prescricao from '../../assets/img/icon-prescricao.svg'
import Lembrete from '../../assets/img/icon-lembrete.svg'
import Avatar from '../../assets/img/avatar.jpg';
class DetalhesConsulta extends Component {

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
                        <h2>Consulta: #49560</h2>
                      </div>
                      <div className="right">
                        <div className="flex no-flex-xs group-btn">
                          <a href="#!" className="btn btn-line">Reagendar Consulta</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="box-dados-group">
                    <div className="flex-space no-flex-xs">
                      <div className="left">
                        <div className="box-titulo">
                          <h3>10:30 - 11:30 | Oftalmologia</h3>
                          <h4>Segunda-feira, 23 de Outubro de 2017</h4>
                          <div className="status status-1">
                            <i className="fa fa-circle" /> Status
                          </div>
                        </div>
                      </div>
                      <div className="right">
                        <div className="box-dados">
                          <div className="flex-top">
                            <div className="avatar">
                              <img className="img-responsive medium" src={Avatar} alt="Nome" />
                            </div>
                            <div className="desc">
                              <h5>Dr. João Antunes</h5>
                              <p>
                                Oftalmologista<br />
                                <a href="mailto:joao@conectamedico.com.br">joao@conectamedico.com.br</a><br />
                                <a href="tel:1197596-5768">11 97596-5768</a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="box-dados-group">
                    <div className="flex-space no-flex-md">
                      <div className="left">
                        <div className="box-dados">
                          <div className="flex-top">
                            <div className="avatar">
                              <img className="img-responsive large" src={Avatar} alt="Nome" />
                            </div>
                            <div className="desc">
                              <h2>Juliana Cunha</h2>
                              <p>
                                <a href="mailto:juliana@gmail.com">juliana@gmail.com</a><br />
                                <a href="tel:1195869-4869">11 95869-4869</a>
                              </p>
                              <a href="#!" className="btn btn-2 icon"><i className="fa fa-paperclip" />Ver resultados de exames</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="right">
                        <div className="flex no-flex-xs group-btn">
                          <a href="#!" className="btn btn-line icon"><i className="fa fa-plus" />Salvar e Adicionar</a>
                          <a href="#!" className="btn icon"><i className="fa fa-plus" />Adicionar Prescrição</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 margin-60">
                    <p className="text-center">Para adicionar ou editar prescrições e lembretes, é necessário o paciente estar em consulta.</p>
                  </div>
                  <div className="row">
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
                            <th className="col-xs-4 col-lg-5 text-left">Medicamento <a href="#!" className="btn-ordenar" /></th>
                            <th className="col-xs-8 col-lg-7 text-left">Observação</th>
                            <th className="text-right"><a href="#!" className="btn btn-small-header">Limpar tudo</a></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="visible-xs visible-sm">Item</td>
                            <td className="text-center"><a href="#!"><i className="fa fa-pencil-square-o" /></a></td>
                            <td data-th="Medicamento" className="text-left"><a href="#!">Paracetamol</a></td>
                            <td data-th="Observação" className="text-left">Tomar 1 comprimido a cada 1 hora durante 5 horas</td>
                            <td data-th="Excluir" className="text-right"><a href="#!"><i className="fa fa-trash" /></a></td>
                          </tr>
                          <tr>
                            <td className="visible-xs visible-sm">Item</td>
                            <td className="text-center"><a href="#!"><i className="fa fa-pencil-square-o" /></a></td>
                            <td data-th="Medicamento" className="text-left"><a href="#!">Paracetamol</a></td>
                            <td data-th="Observação" className="text-left">Tomar 1 comprimido a cada 1 hora durante 5 horas</td>
                            <td data-th="Excluir" className="text-right"><a href="#!"><i className="fa fa-trash" /></a></td>
                          </tr>
                          <tr>
                            <td colSpan={4} className="text-center clean">
                              <a href="#!" className="btn-link icon js-add-prescricao"><i className="fa fa-plus" />Adicionar Prescrição</a>
                            </td>
                          </tr>
                          {/* box js prescrição */}
                          <tr id="addPrescricao" style={{display: 'none'}}>
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
                                          <a href="#!" className="btn-link icon"><i className="fa fa-plus" />Ver prescrições salvas</a>
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
                                        <a href="#!" className="btn btn-small btn-line icon"><i className="fa fa-plus" />Salvar e Adicionar</a>
                                        <a href="#!" className="btn btn-small icon"><i className="fa fa-plus" />Adicionar Prescrição</a>
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
                            <th className="text-right"><a href="#!" className="btn btn-small-header">Limpar tudo</a></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan={4} className="text-center">
                              <a href="#!" className="btn-link btn-link-small icon">Ver antigos</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center"><a href="#!"><i className="fa fa-pencil-square-o" /></a></td>
                            <td data-th="Lembrete" className="text-left">
                              Tomar 1 comprimido a cada 1 hora durante 5 horas<br />
                              <legend>27/10/2017 às 17:00 até 27/12/2017</legend>
                            </td>
                            <td data-th="Excluir" className="text-right"><a href="#!"><i className="fa fa-trash" /></a></td>
                          </tr>
                          <tr>
                            <td className="text-center"><a href="#!"><i className="fa fa-pencil-square-o" /></a></td>
                            <td data-th="Lembrete" className="text-left">
                              Tomar 1 comprimido a cada 1 hora durante 5 horas<br />
                              <legend>27/10/2017 às 17:00 até 27/12/2017</legend>
                            </td>
                            <td data-th="Excluir" className="text-right"><a href="#!"><i className="fa fa-trash" /></a></td>
                          </tr>
                          <tr>
                            <td colSpan={4} className="text-center clean">
                              <a href="#!" className="btn-link icon js-add-lembrete"><i className="fa fa-plus" />Adicionar Lembrete</a>
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
                                          <a href="#!" className="btn-link icon"><i className="fa fa-plus" />Ver prescrições salvas</a>
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
                                        <a href="#!" className="btn btn-small btn-line icon"><i className="fa fa-plus" />Salvar e Adicionar</a>
                                        <a href="#!" className="btn btn-small icon"><i className="fa fa-plus" />Adicionar Prescrição</a>
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
                  <div className="box-btn-footer">
                    <a href="#!" className="btn btn-large icon"><i className="fa fa-check" />Finalizar consulta</a>
                    <a href="#!" className="btn btn-large icon"><i className="fa fa-print" />Finalizar e imprimir</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          );
    }
}
export default DetalhesConsulta;
import React, { Component } from "react";
import Breadcrumbs from "../../../components/breadcrumbs";
class Template extends Component {
  render() {
    return (
      <div className="page-content-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              {/* breadcrumb */}
              <Breadcrumbs/>
              <div className="title flex-space no-flex-sm">
                <h1>Template</h1>
                <div className="box-btn-top">
                  <a href="javascript:0" className="btn icon"><i className="fa fa-plus" />Novo</a>
                  <a href="javascript:0" className="btn icon"><i className="fa fa-trash" />Excluir selecionados</a>
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
                      <th className="col-xs-2 col-lg-1 text-center">&nbsp;</th>
                      <th className="col-xs-2 text-left">Template</th>
                      <th className="text-left">&nbsp;</th>
                      <th className="text-left">&nbsp;</th>
                      <th className="col-xs-2 text-left">Criado por</th>
                      <th className="col-xs-2 text-left">Criado em</th>
                      <th className="col-xs-2 col-lg-1 text-right">
                        <label>
                          <input type="checkbox" name defaultValue />
                          <i className="fa fa-square-o" /><i className="fa fa-check-square-o" />
                        </label>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center"><a href="template-editar.php" className="btn-link icon"><i className="fa fa-pencil-square-o" />Editar</a></td>
                      <td data-th="Template" className="text-left">Nome do Template</td>
                      <td data-th="Prescrições" className="text-left">5 Prescrições</td>
                      <td data-th="Lembretes" className="text-left">4 Lembretes</td>
                      <td data-th="Criado por" className="text-left"><strong>Dr. João Antunes</strong></td>
                      <td data-th="Criado em" className="text-left">24/01/2018</td>
                      <td data-th="Excluir" className="text-right">
                        <label>
                          <input type="checkbox" name defaultValue />
                          <i className="fa fa-square-o" /><i className="fa fa-check-square-o" />
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center"><a href="template-editar.php" className="btn-link icon"><i className="fa fa-pencil-square-o" />Editar</a></td>
                      <td data-th="Template" className="text-left">Nome do Template</td>
                      <td data-th="Prescrições" className="text-left">5 Prescrições</td>
                      <td data-th="Lembretes" className="text-left">4 Lembretes</td>
                      <td data-th="Criado por" className="text-left"><strong>Dr. João Antunes</strong></td>
                      <td data-th="Criado em" className="text-left">24/01/2018</td>
                      <td data-th="Excluir" className="text-right">
                        <label>
                          <input type="checkbox" name defaultValue />
                          <i className="fa fa-square-o" /><i className="fa fa-check-square-o" />
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center"><a href="template-editar.php" className="btn-link icon"><i className="fa fa-pencil-square-o" />Editar</a></td>
                      <td data-th="Template" className="text-left">Nome do Template</td>
                      <td data-th="Prescrições" className="text-left">5 Prescrições</td>
                      <td data-th="Lembretes" className="text-left">4 Lembretes</td>
                      <td data-th="Criado por" className="text-left"><strong>Dr. João Antunes</strong></td>
                      <td data-th="Criado em" className="text-left">24/01/2018</td>
                      <td data-th="Excluir" className="text-right">
                        <label>
                          <input type="checkbox" name defaultValue />
                          <i className="fa fa-square-o" /><i className="fa fa-check-square-o" />
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center"><a href="template-editar.php" className="btn-link icon"><i className="fa fa-pencil-square-o" />Editar</a></td>
                      <td data-th="Template" className="text-left">Nome do Template</td>
                      <td data-th="Prescrições" className="text-left">5 Prescrições</td>
                      <td data-th="Lembretes" className="text-left">4 Lembretes</td>
                      <td data-th="Criado por" className="text-left"><strong>Dr. João Antunes</strong></td>
                      <td data-th="Criado em" className="text-left">24/01/2018</td>
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
export default Template;

import React, { Component } from "react";
import Breadcrumbs from "../../../components/breadcrumbs";
class Tour extends Component {
  render() {
    return (<div className="page-content-wrapper">
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-12">
          {/* breadcrumb */}
          <Breadcrumbs/>
          <div className="title flex-space no-flex-sm">
            <h1>Tour</h1>
            <div className="box-btn-top">
              <a href="javascript:0" className="btn icon"><i className="fa fa-plus" />Novo</a>
              <a href="javascript:0" className="btn icon"><i className="fa fa-trash" />Excluir selecionados</a>
            </div>
          </div>
          <form action autoComplete="off">
            {/* table */}
            <table className="tabela-padrao check-custom">
              <thead>
                <tr>
                  <th className="col-xs-2 col-lg-1 text-center">&nbsp;</th>
                  <th className="col-xs-2 text-center">Publicar</th>
                  <th className="col-xs-2 col-lg-8 text-left">Título</th>
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
                  <td className="text-center"><a href="tour-editar.php" className="btn-link icon"><i className="fa fa-pencil-square-o" />Editar</a></td>
                  <td data-th="Publicar" className="text-center">
                    <label>
                      <input type="checkbox" name defaultValue defaultChecked />
                      <i className="fa fa-square-o" /><i className="fa fa-check-square-o" />
                    </label>
                  </td>
                  <td data-th="Título" className="text-left">Lorem ipsum dolor sit amet</td>
                  <td data-th="Excluir" className="text-right">
                    <label>
                      <input type="checkbox" name defaultValue />
                      <i className="fa fa-square-o" /><i className="fa fa-check-square-o" />
                    </label>
                  </td>
                </tr>
                <tr>
                  <td className="text-center"><a href="tour-editar.php" className="btn-link icon"><i className="fa fa-pencil-square-o" />Editar</a></td>
                  <td data-th="Publicar" className="text-center">
                    <label>
                      <input type="checkbox" name defaultValue defaultChecked />
                      <i className="fa fa-square-o" /><i className="fa fa-check-square-o" />
                    </label>
                  </td>
                  <td data-th="Título" className="text-left">Lorem ipsum dolor sit amet</td>
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
export default Tour;

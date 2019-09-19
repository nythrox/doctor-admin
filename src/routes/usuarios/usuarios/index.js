import React, { Component } from 'react';
import Breadcrumbs from '../../../components/breadcrumbs';
class Usuarios extends Component {

    render(){
        return(
          <div className="page-content-wrapper">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xs-12">
                  {/* breadcrumb */}
                  <Breadcrumbs/>
                  <div className="title">
                    <div className="flex-space no-flex-sm">
                      <h1>Usuários</h1>
                      <div className="box-btn-top">
                        <a href="usuarios-importar-csv.php" className="btn btn-line icon"><i className="fa fa-upload" />Importar .CSV</a>
                        <a href="usuarios-editar.php" className="btn icon"><i className="fa fa-plus" />Novo</a>
                        <a href="javascript:0" className="btn icon"><i className="fa fa-trash" />Excluir selecionados</a>
                      </div>
                    </div>
                    {/* mensagem */}
                    <div className="alert alert-success alert-dismissible" role="alert">
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
                      <strong>47.585</strong> dados importados para a lista
                    </div>
                  </div>
                  <form action>
                    {/* table */}
                    <table className="tabela-padrao check-custom">
                      <thead>
                        <tr>
                          <th className="col-xs-2 col-lg-1 text-center">&nbsp;</th>
                          <th className="col-xs-3 text-left">Nome</th>
                          <th className="col-xs-2 text-left">CPF</th>
                          <th className="col-xs-4 col-lg-5 text-left">E-mail</th>
                          <th className="col-xs-1 text-right">
                            <label>
                              <input type="checkbox" name defaultValue />
                              <i className="fa fa-square-o" /><i className="fa fa-check-square-o" />
                            </label>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-center"><a href="usuarios-editar.php" className="btn-link icon"><i className="fa fa-pencil-square-o" />Editar</a></td>
                          <td data-th="Nome" className="text-left">Nome</td>
                          <td data-th="CPF" className="text-left">000.000.000-00</td>
                          <td data-th="E-mail" className="text-left">email@email.com.br</td>
                          <td data-th="Excluir" className="text-right">
                            <label>
                              <input type="checkbox" name defaultValue />
                              <i className="fa fa-square-o" /><i className="fa fa-check-square-o" />
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center"><a href="usuarios-editar.php" className="btn-link icon"><i className="fa fa-pencil-square-o" />Editar</a></td>
                          <td data-th="Nome" className="text-left">Nome</td>
                          <td data-th="CPF" className="text-left">000.000.000-00</td>
                          <td data-th="E-mail" className="text-left">email@email.com.br</td>
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
export default Usuarios;
import React, { Component } from 'react';
class Home extends Component {

    render(){
        return(
            
      <div className="page-content-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            {/* breadcrumb */}
            {/*?php require_once 'assets/includes/inc-breadcrumb.php'; ?*/}
            <div className="title title flex-space no-flex-md">
              <h1>Título da página</h1>
            </div>
            <form action autoComplete="off">
              <table className="tabela-padrao check-custom tabela-big">
                <thead>
                  <tr>
                    <th className="text-center">&nbsp;</th>
                    <th className="col-xs-2 text-left">Clínica <a href="#!" className="btn-ordenar" /></th>
                    <th className="col-xs-4 text-left">Endereço <a href="#!" className="btn-ordenar maior" /></th>
                    <th className="col-xs-2 text-left">CNPJ <a href="#!" className="btn-ordenar menor" /></th>
                    <th className="col-xs-2 text-left">Avaliação <a href="#!" className="btn-ordenar" /></th>
                    <th className="col-xs-2 text-left">Gestor <a href="#!" className="btn-ordenar" /></th>
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
                    <td data-th="Clínica" className="text-left"><a href="calendario.php">Big Fish Digital</a></td>
                    <td data-th="Endereço" className="text-left">Rua Andréa Paulinetti , 320 SP - São Paulo - 04707050</td>
                    <td data-th="CNPJ" className="text-left">83.051.161/0001-3</td>
                    <td data-th="Avaliação" className="text-left">
                      <span className="box-star">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star vazio" />
                      </span>
                    </td>
                    <td data-th="Gestor" className="text-left"><strong>André Neves</strong></td>
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
                    <td data-th="Clínica" className="text-left"><a href="calendario.php">Big Fish Digital</a></td>
                    <td data-th="Endereço" className="text-left">Rua Andréa Paulinetti , 320 SP - São Paulo - 04707050</td>
                    <td data-th="CNPJ" className="text-left">83.051.161/0001-3</td>
                    <td data-th="Avaliação" className="text-left">
                      <span className="box-star">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star vazio" />
                      </span>
                    </td>
                    <td data-th="Gestor" className="text-left"><strong>André Neves</strong></td>
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
                    <td data-th="Clínica" className="text-left"><a href="calendario.php">Big Fish Digital</a></td>
                    <td data-th="Endereço" className="text-left">Rua Andréa Paulinetti , 320 SP - São Paulo - 04707050</td>
                    <td data-th="CNPJ" className="text-left">83.051.161/0001-3</td>
                    <td data-th="Avaliação" className="text-left">
                      <span className="box-star">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star vazio" />
                      </span>
                    </td>
                    <td data-th="Gestor" className="text-left"><strong>André Neves</strong></td>
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
                    <td data-th="Clínica" className="text-left"><a href="calendario.php">Big Fish Digital</a></td>
                    <td data-th="Endereço" className="text-left">Rua Andréa Paulinetti , 320 SP - São Paulo - 04707050</td>
                    <td data-th="CNPJ" className="text-left">83.051.161/0001-3</td>
                    <td data-th="Avaliação" className="text-left">
                      <span className="box-star">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star vazio" />
                      </span>
                    </td>
                    <td data-th="Gestor" className="text-left"><strong>André Neves</strong></td>
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
            {/* Paginação */}
            {/*?php require_once 'assets/includes/inc-paginacao-tabela.php'; ?*/}
          </div>
        </div>
      </div>
    </div>
          );
    }
}
export default Home;
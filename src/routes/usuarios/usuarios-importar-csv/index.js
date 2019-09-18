import React, { Component } from 'react';
import Breadcrumbs from '../../../components/breadcrumbs';
class UsuariosImportarCsv extends Component {

    render(){
        return(
          <div className="page-content-wrapper">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xs-12">
                  {/* breadcrumb */}
                  <Breadcrumbs/>
                  <div className="title">
                    <h1>Carregar arquivo .CSV</h1>
                  </div>
                  <form action autoComplete="off">
                    <div className="row">
                      <div className="col-xs-12 col-lg-6">
                        <div className="form-group">
                          <h6 className="margin-bottom-20">Utilize o campo abaixo para importar dados pelo arquivo .CSV.</h6>
                          <div className="input-file">
                            <div className="box-file">
                              <input name type="file" className="custom-input-file" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-12">
                        <div className="form-group">
                          <div className="box-carregando" style={{display: 'block'}}>
                            <span className="flex">
                              <i className="fa fa-spinner fa-pulse" /> Carregando
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-12">
                        <div className="form-group">
                          <a href="usuarios-importar-csv-int.php" className="btn btn-2 btn-small">Avançar »</a>
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
export default UsuariosImportarCsv;
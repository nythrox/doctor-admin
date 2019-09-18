import React, { Component } from 'react';
import Breadcrumbs from '../../components/breadcrumbs';
class QuemSomos extends Component {

    render(){
        return(
          <div className="page-content-wrapper">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xs-12">
                  {/* breadcrumb */}
                  <Breadcrumbs/>
                  <div className="title">
                    <h1>Quem Somos</h1>
                    <div className="alert alert-info alert-dismissible" role="alert">
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
                      Campos com <strong>*</strong> são obrigatórios.
                    </div>
                  </div>
                  <form action className="form-vertical" autoComplete="off">
                    <div className="box-item-int">
                      <h5>Conteúdo</h5>
                      <div className="row">
                        <div className="col-xs-12">
                          <div className="form-group">
                            <label>Título <span>*</span></label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-xs-12">
                          <div className="form-group">
                            <label>Descrição</label>
                            <textarea className="editor-tinymce-js" defaultValue={""} />
                          </div>
                        </div>
                        <div className="col-xs-12">
                          <div className="form-group margin-top-20">
                            <label>Banner</label>
                            <div className="input-file">
                              <div className="box-file">
                                <input type="file" id className="js-file-img" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="box-btn-footer">
                      <button className="btn btn-large icon"><i className="fa fa-check" />Salvar</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          );
    }
}
export default QuemSomos;
import React, { Component } from 'react';
import Breadcrumbs from '../../../components/breadcrumbs';
class TourEditar extends Component {

    render(){
        return(<div className="page-content-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              {/* breadcrumb */}
              <Breadcrumbs/>
              <div className="title">
                <h1>Cadastrar slides</h1>
                <div className="alert alert-info alert-dismissible" role="alert">
                  <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
                  Campos com <strong>*</strong> são obrigatórios.
                </div>
              </div>
              <form action className="form-vertical" autoComplete="off">
                <div className="box-item-int">
                  <h5>Conteúdo</h5>
                  <div className="row">
                    <div className="col-xs-12 col-md-3 col-lg-2">
                      <div className="form-group">
                        <label>Publicar</label>
                        <label className="check-custom check-big">
                          <input type="checkbox" name defaultValue defaultChecked />
                          <i className="fa fa-square-o" /><i className="fa fa-check-square-o" />
                        </label>
                      </div>
                    </div>
                    <div className="col-xs-12 col-md-9 col-lg-10">
                      <div className="form-group">
                        <label>Título <span>*</span></label>
                        <input type="text" className="form-control" id />
                      </div>
                    </div>
                    <div className="col-xs-12">
                      <div className="form-group">
                        {/*
                                            <label>Imagem <span>*</span></label>
                                            <div class="box-content-crop-img upload-logo">
                                                <img class="img-responsive" src="assets/img/img-demo-crop.jpg" alt="imagem">
                                                <a href="javascript:0" class="btn btn-small btn-2 icon pull-left"><i class="fa fa-trash"></i>Excluir</a>
                                            </div>
                                            */}
                        <label>Inserir imagem <span>*</span></label>
                        <div className="input-file">
                          <div className="box-file">
                            <input type="file" id className="js-file-img" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12">
                      <div className="form-group">
                        <label>Conteúdo</label>
                        <textarea className="editor-tinymce-js" defaultValue={""} />
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
export default TourEditar;
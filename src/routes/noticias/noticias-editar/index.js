import React, { Component } from 'react';
import DemoCrop from '../../../assets/img/img-demo-crop.jpg';
import Breadcrumbs from '../../../components/breadcrumbs';
class NoticiasEditar extends Component {

    render(){
        return(
          <div className="page-content-wrapper">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xs-12">
                  {/* breadcrumb */}
                  <Breadcrumbs/>
                  <div className="title">
                    <h1>Cadastrar notícia</h1>
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
                        <div className="col-xs-12 col-md-9 col-lg-4">
                          <label>Data <span>*</span></label>
                          <div className="flex group-input">
                            <input type="tel" className="form-control input-data datepicker-js" id /><span>às</span>
                            <input type="tel" className="form-control input-number input-hora" id />
                          </div>
                        </div>
                        <div className="col-xs-12 col-lg-6">
                          <div className="form-group">
                            <label>Título <span>*</span></label>
                            <input type="text" className="form-control" id />
                          </div>
                        </div>
                        <div className="col-xs-12">
                          <div className="form-group">
                            <label>Resumo <span>*</span></label>
                            <textarea name id className="form-control" defaultValue={""} />
                          </div>
                        </div>
                        <div className="col-xs-12">
                          <div className="form-group">
                            <label>Imagem</label>
                            <div className="box-content-crop-img upload-logo">
                              <img className="img-responsive" src={DemoCrop} alt="imagem" />
                              <a href="javascript:0" className="btn btn-small btn-2 icon pull-left"><i className="fa fa-trash" />Excluir</a>
                            </div>
                            {/* 
                                                <label>Inserir imagem</label>
                                                <div class="input-file">
                                                    <div class="box-file">
                                                    <input type="file" id="" class="js-file-img"/>
                                                </div>
                                                */}
                          </div>
                        </div>
                        <div className="col-xs-12">
                          <div className="form-group">
                            <label htmlFor>Conteúdo</label>
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
export default NoticiasEditar;
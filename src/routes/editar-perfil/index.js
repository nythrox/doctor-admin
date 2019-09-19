import React, { Component } from 'react';
import Breadcrumbs from '../../components/breadcrumbs';
import Avatar from '../../assets/img/avatar.jpg';
class EditarPerfil extends Component {

    render(){
        return(<div className="page-content-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              {/* breadcrumb */}
              <Breadcrumbs/>
              <div className="title">
                <h1>Editar Perfil</h1>
                <h6 className="margin-bottom-20">Edite seu perfil e acessos.</h6>
                <div className="alert alert-info alert-dismissible" role="alert">
                  <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
                  Campos com <strong>*</strong> são obrigatórios.
                </div>
              </div>
              <form action autoComplete="off">
                <div className="box-item-int">
                  <div className="row">
                    <div className="col-xs-12 col-md-3 col-lg-2">
                      <div className="avatar-file">
                        <img className="img-responsive" src={Avatar} alt="" />
                        <h6>Formatos: jpg. png. gif. svg</h6>
                        <a href="javascript:" className="btn js-file-link">Trocar foto</a>
                        <input type="file" className="js-file" />
                      </div>
                    </div>
                    <div className="col-xs-12 col-md-9 col-lg-10">
                      <div className="row">
                        <div className="col-xs-12">
                          <h5 className="mb-0">Seus Dados</h5>
                          <h6 className="margin-bottom-20">Aqui estão seus dados básicos.</h6>
                        </div>
                        <div className="form-group">
                          <div className="col-xs-12 col-lg-3">
                            <label>Nome inteiro <span>*</span></label>
                            <input type="text" className="form-control" id />
                          </div>
                          <div className="col-xs-12 col-sm-4 col-lg-3">
                            <label>CPF <span>*</span></label>
                            <input type="tel" className="form-control input-cpf" id />
                          </div>
                          <div className="col-xs-12 col-sm-4 col-lg-3">
                            <label>CRM <span>*</span></label>
                            <input type="tel" className="form-control" id />
                          </div>
                          <div className="col-xs-12 col-sm-4 col-lg-3">
                            <label>Sexo <span>*</span></label>
                            <select name id className="form-control">
                              <option selected hidden>...</option>
                              <option value>Masculino</option>
                              <option value>Feminino</option>
                            </select>
                          </div>
                          <div className="col-xs-12">
                            <label>Descrição</label>
                            <textarea className="form-control" defaultValue={""} />
                          </div>
                        </div>
                        <div className="col-xs-12">
                          <h5 className="mb-0 margin-top-30">Seus contatos</h5>
                          <h6 className="margin-bottom-20">Preencha os campos abaixo para que os pacientes entrem em contato.</h6>
                        </div>
                        <div className="form-group">
                          <div className="col-xs-12 col-sm-6 col-md-4">
                            <label>WhatsApp <span>*</span></label>
                            <input type="tel" className="form-control input-tel" id />
                          </div>
                          <div className="col-xs-12 col-sm-6 col-md-4">
                            <label>Telefone <span>*</span></label>
                            <input type="tel" className="form-control input-tel" id />
                          </div>
                          <div className="col-xs-12 col-md-6 col-md-4">
                            <label>E-mail <span>*</span></label>
                            <input type="email" className="form-control" id />
                          </div>
                        </div>
                        <div className="col-xs-12">
                          <h5 className="mb-0 margin-top-30">Atendimento</h5>
                          <h6 className="margin-bottom-20">Aqui são as informações de atendimento.</h6>
                        </div>
                        <div className="form-group">
                          <div className="col-xs-12">
                            <label>Especialidade <span>*</span></label>
                            <input type="text" data-role="tagsinput" defaultValue="Cardiologista" placeholder="Adicionar especialidade" className="form-control" />
                          </div>
                          <div className="col-xs-12 col-sm-6 col-lg-4">
                            <label>Convênio? <span>*</span></label>
                            <input type="text" className="form-control" id />
                          </div>
                          <div className="col-xs-12 col-sm-6 col-lg-4">
                            <label>Valor da Consulta <span>*</span></label>
                            <input type="tel" className="form-control" id />
                          </div>
                          <div className="col-xs-12 col-lg-4">
                            <label>Endereço <span>*</span></label>
                            <input type="text" className="form-control" id />
                          </div>
                        </div>
                        <div className="col-xs-12">
                          <h5 className="mb-0 margin-top-30">Senha</h5>
                          <h6 className="margin-bottom-20">Para mudar a senha preencha os campos abaixo.</h6>
                        </div>
                        <div className="form-group">
                          <div className="col-xs-12 col-md-6 col-md-4">
                            <label>Senha atual <span>*</span></label>
                            <input type="text" className="form-control" id />
                          </div>
                          <div className="col-xs-12 col-sm-6 col-md-4">
                            <label>Nova senha <span>*</span></label>
                            <input type="text" className="form-control" id />
                          </div>
                          <div className="col-xs-12 col-sm-6 col-md-4">
                            <label>Repetir senha <span>*</span></label>
                            <input type="tel" className="form-control" id />
                          </div>
                          <div className="col-xs-12">
                            <h6>• Pelo menos uma letra<br />
                              • Pelo menos um número<br />
                              • No mínimo 8 caracteres</h6>
                          </div>
                        </div>
                        <div className="col-xs-12">
                          <div className="box-btn-footer">
                            <button className="btn btn-large icon"><i className="fa fa-check" />Salvar</button>
                          </div>
                        </div>
                      </div>
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
export default EditarPerfil;
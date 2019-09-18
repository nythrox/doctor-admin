import React, { Component } from "react";
import Breadcrumbs from "../../../components/breadcrumbs";
import DemoCrop from '../../../assets/img/img-demo-crop.jpg';
import SemImg from '../../../assets/img/sem-img.jpg';
import Avatar from '../../../assets/img/avatar.jpg';

class ChatInt extends Component {
  render() {
    return ( <div className="page-content-wrapper">
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-12">
          {/* breadcrumb */}
          <Breadcrumbs/>
          <form action autoComplete="off">
            <div className="box-chat">
              {/* CONVERSA */}
              <div className="col-xs-12 col-lg-8 nopadding boxHeight box-txt">
                <div className="top header-chat">
                  <div className="avatar">
                    <img className="img-responsive" src={Avatar} alt="Nome" />
                    <strong>Juliana Cunha</strong>
                  </div>
                </div>
                <div className="content">
                  <div className="data"><span>19/jan/2018</span></div>
                  <div className="txt-enviado">{/* enviado */}
                    <div className="talk-bubble tri-right left-top">
                      <div className="talktext">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex repudiandae est, ut nobis, error quidem dolorum voluptatum porro nemo dolore</p>
                        <p>Ullam autem dolore, quod quo fugiat neque!</p>
                        <span className="horas">12:00</span>
                      </div>
                    </div>
                  </div>
                  <div className="data"><span>20/jan/2018</span></div>
                  <div className="txt-recebido">{/* recebido */}
                    <div className="talk-bubble tri-right right-top">
                      <div className="talktext">
                        <p>Quas rerum dicta, recusandae laboriosam magnam velit harum cupiditate, quae et atque sapiente eveniet possimus id amet? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat itaque iure tempore quasi maxime minima beatae autem ut amet magni similique, accusantium debitis soluta aliquid cum facilis expedita laborum eveniet.</p>
                        <span className="horas">12:00</span>
                      </div>
                    </div>
                  </div>
                  <div className="txt-enviado">{/* enviado */}
                    <div className="talk-bubble tri-right left-top">
                      <div className="talktext">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <span className="horas">13:10</span>
                      </div>
                    </div>
                  </div>
                  <div className="txt-recebido">{/* recebido */}
                    <div className="talk-bubble tri-right right-top">
                      <div className="talktext">
                        <img className="img-responsive" src={DemoCrop} alt="Imagem" />
                        <span className="horas">16:00</span>
                      </div>
                    </div>
                  </div>
                </div>{/* /content */}
                <div className="bottom enviar-msg">
                  <div className="flex-bottom">
                    <div className="fileCustom">
                      <input type="file" accept="image/jpeg, image/png, image/gif" id="imgChooser" />
                      <div className="box-preview-file">
                        <img className="img-responsive" id="previewImgFile" />
                        <a href="#!" className="limpar-file"><i className="fa fa-times" /></a>
                      </div>
                    </div>
                    <textarea className="form-control autoExpand" rows={1} data-min-rows={1} placeholder="Digite uma mensagem..." defaultValue={""} />
                    <a href="#!" className="btn-icon enviar"><i className="fa fa-paper-plane" /></a>
                  </div>
                </div>
              </div>{/* /box-txt */}
              {/* INFORMAÇÕES */}
              <div className="col-xs-12 col-lg-4 nopadding boxHeight box-info">
                <div className="top header-chat">
                  <strong>Informações</strong>
                </div>
                <div className="content">
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
                      </div>
                    </div>
                  </div>
                  <div className="box-consultas">
                    <div className="header-box">
                      <div className="flex-space">
                        <h4>Consultas</h4>
                        <a href="calendario.php" className="icon"><i className="fa fa-angle-right" /></a>
                      </div>
                    </div>
                    <div className="lista-item">{/* Carregar apenas 3 itens "group-item" */}
                      <div className="group-item">
                        <div className="row">
                          <div className="flex">
                            <div className="col-sm-3">
                              <h6>12/01/2018<br />
                                10:30 - 11:30</h6>
                            </div>
                            <div className="col-sm-5">
                              <h4>Dr. João Antunes<br />
                                Oftalmologia</h4>
                            </div>
                            <div className="col-sm-4">
                              <div className="status status-2">
                                <i className="fa fa-circle" /> Pós Consulta
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="group-item">
                        <div className="row">
                          <div className="flex">
                            <div className="col-sm-3">
                              <h6>12/01/2018<br />
                                10:30 - 11:30</h6>
                            </div>
                            <div className="col-sm-5">
                              <h4>Dr. João Antunes<br />
                                Oftalmologia</h4>
                            </div>
                            <div className="col-sm-4">
                              <div className="status status-2">
                                <i className="fa fa-circle" /> Pós Consulta
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="group-item">
                        <div className="row">
                          <div className="flex">
                            <div className="col-sm-3">
                              <h6>12/01/2018<br />
                                10:30 - 11:30</h6>
                            </div>
                            <div className="col-sm-5">
                              <h4>Dr. João Antunes<br />
                                Oftalmologia</h4>
                            </div>
                            <div className="col-sm-4">
                              <div className="status status-2">
                                <i className="fa fa-circle" /> Pós Consulta
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="box-anexos">
                    <div className="header-box">
                      <div className="flex-space">
                        <h4>Anexos da conversa</h4>
                      </div>
                    </div>
                    <div className="lista-item lista-anexos">{/* Essa lista gera um scrol automático acima de 8 itens */}
                      <div className="col-xs-6 col-sm-3 col-md-2 col-lg-3 boxHeight">
                        <img className="img-responsive" src={SemImg} alt="Imagem" />
                      </div>
                      <div className="col-xs-6 col-sm-3 col-md-2 col-lg-3 boxHeight">
                        <img className="img-responsive" src={SemImg} alt="Imagem" />
                      </div>
                      <div className="col-xs-6 col-sm-3 col-md-2 col-lg-3 boxHeight">
                        <img className="img-responsive" src={SemImg} alt="Imagem" />
                      </div>
                      <div className="col-xs-6 col-sm-3 col-md-2 col-lg-3 boxHeight">
                        <img className="img-responsive" src={SemImg} alt="Imagem" />
                      </div>
                      <div className="col-xs-6 col-sm-3 col-md-2 col-lg-3 boxHeight">
                        <img className="img-responsive" src={SemImg} alt="Imagem" />
                      </div>
                      <div className="col-xs-6 col-sm-3 col-md-2 col-lg-3 boxHeight">
                        <img className="img-responsive" src={SemImg} alt="Imagem" />
                      </div>
                      <div className="col-xs-6 col-sm-3 col-md-2 col-lg-3 boxHeight">
                        <img className="img-responsive" src={SemImg} alt="Imagem" />
                      </div>
                      <div className="col-xs-6 col-sm-3 col-md-2 col-lg-3 boxHeight">
                        <img className="img-responsive" src={SemImg} alt="Imagem" />
                      </div>
                    </div>
                  </div>
                </div>{/* /content */}
              </div>{/* /box-info */}
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
    );
  }
}
export default ChatInt;

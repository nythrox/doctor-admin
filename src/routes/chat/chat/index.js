import React, { Component } from "react";
import Breadcrumbs from "../../../components/breadcrumbs";
import DemoCrop from '../../../assets/img/img-demo-crop.jpg';
import SemImg from '../../../assets/img/sem-img.jpg';
import Avatar from '../../../assets/img/avatar.jpg';

class Chat extends Component {
  render() {
    return ( 
      <div className="page-content-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              {/* breadcrumb */}
              <Breadcrumbs/>
              <div className="title flex-space no-flex-sm">
                <h1>Chat</h1>
                <div className="box-btn-top">
                  <a href="chat-int.php" className="btn icon"><i className="fa fa-user-plus" />Nova conversa</a>
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
                      <th className="text-center">&nbsp;</th>
                      <th className="col-xs-3 text-left">Usuário <a href="javascript:0" className="btn-ordenar" /></th>
                      <th className="col-xs-2 text-left">E-mail <a href="javascript:0" className="btn-ordenar" /></th>
                      <th className="col-xs-7 text-left">Conversa <a href="javascript:0" className="btn-ordenar" /></th>
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
                      <td data-th="Usuário" className="text-left">
                        <a href="chat-int.php">
                          <div className="avatar">
                            <img className="img-responsive" src={Avatar} alt="Nome" />
                            <strong>Nome Completo</strong>
                          </div>
                        </a>
                      </td>
                      <td data-th="E-mail" className="text-left">email@email.com</td>
                      <td data-th="Conversa" className="text-left">
                        <div className="flex-space no-flex-xs resumo-chat">
                          <div className="box-left">
                            <strong>Juliana: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo deserunt magni...</strong>
                          </div>
                          <div className="box-right">
                            <div className="flex-end no-flex-xs">
                              <span className="qtd">23</span>
                              <span className="hora">10:40</span>
                            </div>
                          </div>
                        </div>
                      </td>
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
                      <td data-th="Usuário" className="text-left">
                        <a href="chat-int.php">
                          <div className="avatar">
                            <img className="img-responsive" src={Avatar} alt="Nome" />
                            <strong>Nome Completo</strong>
                          </div>
                        </a>
                      </td>
                      <td data-th="E-mail" className="text-left">email@email.com</td>
                      <td data-th="Conversa" className="text-left">
                        <div className="flex-space no-flex-xs resumo-chat">
                          <div className="box-left">
                            <strong>Juliana: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo deserunt magni...</strong>
                          </div>
                          <div className="box-right">
                            <div className="flex-end no-flex-xs">
                              <span className="qtd">23</span>
                              <span className="hora">10:40</span>
                            </div>
                          </div>
                        </div>
                      </td>
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
                      <td data-th="Usuário" className="text-left">
                        <a href="chat-int.php">
                          <div className="avatar">
                            <img className="img-responsive" src={Avatar} alt="Nome" />
                            <strong>Nome Completo</strong>
                          </div>
                        </a>
                      </td>
                      <td data-th="E-mail" className="text-left">email@email.com</td>
                      <td data-th="Conversa" className="text-left">
                        <div className="flex-space no-flex-xs resumo-chat">
                          <div className="box-left">
                            Juliana: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo deserunt magni...
                          </div>
                          <div className="box-right">
                            <div className="flex-end no-flex-xs">
                              <span className="hora">10:40</span>
                            </div>
                          </div>
                        </div>
                      </td>
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
                      <td data-th="Usuário" className="text-left">
                        <a href="chat-int.php">
                          <div className="avatar">
                            <img className="img-responsive" src={Avatar} alt="Nome" />
                            <strong>Nome Completo</strong>
                          </div>
                        </a>
                      </td>
                      <td data-th="E-mail" className="text-left">email@email.com</td>
                      <td data-th="Conversa" className="text-left">
                        <div className="flex-space no-flex-xs resumo-chat">
                          <div className="box-left">
                            Juliana: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo deserunt magni...
                          </div>
                          <div className="box-right">
                            <div className="flex-end no-flex-xs">
                              <span className="hora">10:40</span>
                            </div>
                          </div>
                        </div>
                      </td>
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
export default Chat;

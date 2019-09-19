import React, { Component } from "react";
import Breadcrumbs from "../../../components/breadcrumbs";
import Avatar from '../../../assets/img/avatar.jpg';
import Visa from '../../../assets/img/icon-visa.svg';

class MinhasConsultasInt extends Component {
  render() {
    return (<div className="page-content-wrapper">
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-12">
          {/* breadcrumb */}
          <Breadcrumbs/>
          <div className="title">
            <h1>Minhas Consultas</h1>
            <h6>Este é o histórico de sua consulta, confira abaixo.</h6>
          </div>
          <div className="flex-space no-flex-xs border-bottom margin-bottom-30">
            <div className="title mb-0">
              <h2 className="mb-0">Ortopedia</h2>
              <h4><strong>Consulta: CM45KO6R7</strong></h4>
            </div>
            <div className="form-group">
              <label htmlFor>Marcar uma data:</label>
              <input type="text" className="form-control input-data" />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-lg-3">
              <h4><strong>Dados do paciente:</strong></h4>
              <h6>Confira as informações do paciente abaixo.</h6>
              <div className="group-avatar big margin-20">
                <img src={Avatar} alt="Nome" />
                <div className="group">
                  <h6><strong>Nome Paciente</strong></h6>
                  <h6>CPF 999.999.999-99</h6>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-3">
              <h4><strong>Dados do médico que atendeu:</strong></h4>
              <h6>Confira as informações do do médico que realizou o atendimento:</h6>
              <div className="group-avatar margin-20">
                <img src={Avatar} alt="Nome" />
                <div className="group">
                  <h6><strong>Dr. Médico Josival</strong></h6>
                  <h6>Ortopedia</h6>
                  <h6>Consulta: CM45KO6R7</h6>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-lg-6">
              <h4><strong>Pagamento</strong></h4>
              <h6>Estas são as informações de pagamento. Se você tem convêncio, estará discriminado abaixo.</h6>
              <div className="box-status-pagamento">
                <div className="group-status margin-top-20">
                  <div className="item boxHeight ok">
                    <h6>Pedido<br /> realizado</h6>
                    <h6 className="italic default">01/08/2019</h6>
                  </div>
                  <div className="item boxHeight ok">
                    <h6>Pedido<br /> faturado</h6>
                    <h6 className="italic default">01/08/2019</h6>
                  </div>
                  <div className="item boxHeight active">
                    <h6>Pago<br /> realizado</h6>
                    <h6 className="italic default">02/08/2019</h6>
                  </div>
                  <div className="item boxHeight">
                    <h6>Teleconsulta<br /> realizada</h6>
                    <h6 className="italic default">Aguardando…</h6>
                  </div>
                </div>
                <div className="group-cartao margin-top-20">
                  <h6 className="margin-bottom-5"><strong>Forma de pagamento</strong></h6>
                  <div className="flex-top">
                    <img className="icon-cartao" src={Visa} alt="Visa" />
                    <div className="group">
                      <h6>Cartão Visa</h6>
                      <h6>Nome: Fulano de Tal</h6>
                      <h6>Cartão: <span>*** *** ***</span> 9898</h6>
                    </div>
                    <div className="group">
                      <h6>2x de R$ 40,00</h6>
                      <h6><strong>Total R$ 80,00</strong></h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
  }
}
export default MinhasConsultasInt;

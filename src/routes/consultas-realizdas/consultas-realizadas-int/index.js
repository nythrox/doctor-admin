import React, { Component } from 'react';
import Breadcrumbs from '../../../components/breadcrumbs';
import Avatar from '../../../assets/img/avatar.jpg';
import Visa from '../../../assets/img/icon-visa.svg';
import SemImg from '../../../assets/img/sem-img.jpg';
class ConsultasRealizadasInt extends Component {

    render(){
        return(
        
      <div className="page-content-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            {/* breadcrumb */}
            <Breadcrumbs/>
            <div className="title">
              <h1>Consultas Realizadas</h1>
              <h6>Este é o histórico de sua consulta, confira abaixo.</h6>
            </div>
            <div className="flex-space no-flex-xs border-bottom margin-bottom-30">
              <div className="title mb-0">
                <h2 className="mb-0">Ortopedia</h2>
                <h4><strong>Consulta: CM45KO6R7</strong></h4>
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
              <div className="col-xs-12"><hr /></div>
              <div className="col-xs-12 col-lg-4">
                <h4><strong>Lembretes e prescrições</strong></h4>
                <div className="card p-20 no-radius-mob">
                  <div className="d-inline margin-bottom-5">
                    <h6><strong>Princípio ativo ou Medicamento</strong></h6>
                    <h6 className="italic default">Consulta: CM45KO6R7</h6>
                  </div>
                  <div className="d-inline margin-bottom-5">
                    <h6>Apresentação</h6>
                    <h6 className="italic default">Apresentação 400 MG COM CT BL AL PLAS INC</h6>
                  </div>
                  <div className="d-inline margin-bottom-5">
                    <h6>Qual intervalo?</h6>
                    <h6 className="italic default">Intervalo de 4 horas</h6>
                  </div>
                  <div className="d-inline margin-bottom-5">
                    <h6>Quantos dias?</h6>
                    <h6 className="italic default">8 dias</h6>
                  </div>
                  <div className="d-inline margin-bottom-5">
                    <h6>Data e horário de início</h6>
                    <h6 className="italic default">Começa em 12/05/2019</h6>
                  </div>
                </div>
                <div className="card p-20 no-radius-mob">
                  <div className="d-inline mb-5">
                    <h6><strong>Princípio ativo ou Medicamento</strong></h6>
                    <h6 className="italic default">Consulta: CM45KO6R7</h6>
                  </div>
                  <div className="d-inline margin-bottom-5">
                    <h6>Apresentação</h6>
                    <h6 className="italic default">Apresentação 400 MG COM CT BL AL PLAS INC</h6>
                  </div>
                  <div className="d-inline margin-bottom-5">
                    <h6>Qual intervalo?</h6>
                    <h6 className="italic default">Intervalo de 4 horas</h6>
                  </div>
                  <div className="d-inline margin-bottom-5">
                    <h6>Quantos dias?</h6>
                    <h6 className="italic default">8 dias</h6>
                  </div>
                  <div className="d-inline margin-bottom-5">
                    <h6>Data e horário de início</h6>
                    <h6 className="italic default">Começa em 12/05/2019</h6>
                  </div>
                </div>
                <div className="card p-20 no-radius-mob">
                  <div className="check-custom">
                    <div className="item">
                      <label>
                        <input type="checkbox" name defaultValue />
                        <i className="fa fa-square-o" /><i className="fa fa-check-square-o" />
                        <span className="group margin-top-20">
                          <h6><strong>Título do lembrete</strong></h6>
                          <h6 className="italic default">Consulta: CM45KO6R7</h6>
                          <h6 className="mv-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique venenatis ornare.</h6>
                          <h6 className="italic default margin-bottom-5">Começa em 25/02/2019</h6>
                          <h6 className="italic default">Repete Semanalmente</h6>
                          <h6 className="italic default">Termina em 01/04/2019</h6>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-lg-6 col-lg-offset-2 mt-20-lg">
                <h4><strong>Anotações</strong></h4>
                <article className="content margin-top-20">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in massa hendrerit, eleifend diam sed, egestas neque. Morbi pretium urna et tellus iaculis, id egestas mi gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                  <br />
                  <p>Nullam sit amet turpis accumsan, tincidunt nisi ac, bibendum odio. In lobortis vitae erat at sagittis. Integer sed mauris euismod, consequat magna ut, faucibus odio. Proin euismod libero at lorem scelerisque, in ullamcorper dolor consectetur. Nam luctus elit ac est molestie faucibus.</p>
                  <br />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in massa hendrerit, eleifend diam sed, egestas neque. Morbi pretium urna et tellus iaculis, id egestas mi gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam sit amet turpis accumsan, tincidunt nisi ac, bibendum odio. In lobortis vitae erat at sagittis. Integer sed mauris euismod, consequat magna ut, faucibus odio. Proin euismod libero at lorem scelerisque, in ullamcorper dolor consectetur. Nam luctus elit ac est molestie faucibus.</p>
                </article>
                <h4 className="margin-top-20"><strong>Anexos</strong></h4>
                <h6>4 arquivos</h6>
                <div className="row margin-top-20">
                  <div className="col-xs-6 col-sm-4 col-md-3 boxHeight">
                    <a data-fancybox="lightbox-img" data-caption="Nome do Anexo" href={SemImg} className="box-lightbox-img">
                      <div className="box-img" style={{backgroundImage: 'url('+{SemImg}+')'}} />
                    </a>
                  </div>
                  <div className="col-xs-6 col-sm-4 col-md-3 boxHeight">
                    <a data-fancybox="lightbox-img" data-caption="Nome do Anexo" href={SemImg} className="box-lightbox-img">
                      <div className="box-img" style={{backgroundImage: 'url('+{SemImg}+')'}} />
                    </a>
                  </div>
                  <div className="col-xs-6 col-sm-4 col-md-3 boxHeight">
                    <a data-fancybox="lightbox-img" data-caption="Nome do Anexo" href={SemImg} className="box-lightbox-img">
                      <div className="box-img" style={{backgroundImage: 'url('+{SemImg}+')'}} />
                    </a>
                  </div>
                  <div className="col-xs-6 col-sm-4 col-md-3 boxHeight">
                    <a data-fancybox="lightbox-img" data-caption="Nome do Anexo" href={SemImg} className="box-lightbox-img">
                      <div className="box-img" style={{backgroundImage: 'url('+{SemImg}+')'}} />
                    </a>
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
export default ConsultasRealizadasInt;
import React, { Component } from 'react';
class Error404 extends Component {

    render(){
        return(
        <div className="pg-error">
      <div className="page-content-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-md-4 col-md-offset-4 text-center">
            <div className="box-error">
              <div className="icon">
                <i className="fa fa-exclamation-circle" />
              </div>
              <h1>404</h1>
              <h4>Página não encontrada</h4>
              <div className="text-center">
                <a href="javascript:0" className="btn"><i className="fa fa-arrow-left" />Voltar a Home</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></div>
          );
    }
}
export default Error404;
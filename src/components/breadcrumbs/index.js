import React, { Component } from 'react';
class Breadcrumbs extends Component {

    render(){
        return(      
          <div>
            <ol className="breadcrumb">
              <li><a href="./">Home</a></li>
              <li><a href="javascript:0">Primeiro nível</a></li>
              <li className="active">Nível atual</li>
            </ol>
            <div className="btn-voltar">
              <a href="javascript:0" className="btn-link"><i className="fa fa-arrow-left" />Voltar</a>
            </div>
          </div>
          );
    }
}
export default Breadcrumbs;
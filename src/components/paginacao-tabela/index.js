import React, { Component } from 'react';
class PaginacaoTabela extends Component {

    render(){
        return(      <div className="flex-space no-flex-xs">
        <ul className="pagination">
          <li className="page-item disabled">
            <a className="page-link" href="javascript:0" tabIndex={-1} aria-label="Previous">
              <span aria-hidden="true">«</span>
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="javascript:0">1 <span className="sr-only">(current)</span></a>
          </li>
          <li className="page-item"><a className="page-link" href="javascript:0">2</a></li>
          <li className="page-item"><a className="page-link" href="javascript:0">3</a></li>
          <li className="page-item"><a className="page-link" href="javascript:0">4</a></li>
          <li className="page-item">
            <a className="page-link" href="javascript:0" aria-label="Next">
              <span aria-hidden="true">»</span>
            </a>
          </li>
        </ul>
        <div className="registros">
          <p><span>6</span> registros</p>
        </div>
      </div>
          );
    }
}
export default PaginacaoTabela;
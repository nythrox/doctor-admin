import React, { Component } from 'react';
import Avatar from '../../assets/img/avatar.jpg';
class Navbar extends Component {
    
    render(){
        return (
          <header className="header-top">
            <div className="flex-end no-flex-xs">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#menu-topo">
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <div className="collapse navbar-collapse" id="menu-topo">
                <div className="flex-end no-flex-sm">
                  <div className="box-search">
                    <input type="text" className="form-control" placeholder="Busca" />
                  <a href="javascript:0" className="icon"><i className="fa fa-search" /></a>
                  </div>
                  <div className="menu-user">
                    <div className="dropdown">
                      <a href="javascript:0" className="dropdown-toggle btn-avatar" id="dropdownMenuUser" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        <img src={Avatar} alt="Avatar" />André<i className="fa fa-caret-down" />
                      </a>
                      <ul className="dropdown-menu" >
                        <li><a href="javascript:0">Editar perfil</a></li>
                        <li><a href="javascript:0">Mudar senha</a></li>
                        <li role="separator" className="divider" />
                        <li><a href="./">Sair</a></li>
                      </ul>
                    </div>
                  </div>
                  <nav className="nav navbar-nav group-icon">
                    <li className="separar" />
                    <li className="icon-chat">
                      <a href="javascript:0" className="group-badge">
                        <i className="fa fa-commenting" />
                        <span className="badge">+99</span>
                      </a>
                    </li>
                    <li><a href="javascript:0" target="blank"><i className="fa fa-bell" /></a></li>
                    <li><a href="javascript:0"><i className="fa fa-cog" /></a></li>
                  </nav>
                </div>
              </div>
            </div>
          </header>
        );
    }
}
export default Navbar;   
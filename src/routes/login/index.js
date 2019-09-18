import React, { Component } from 'react';
import Logo from '../../assets/img/logo-cliente.png';
class Login extends Component {

    

    render(){
        return (
            <div>
            <header class="header"></header>
            <section className="box-login">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div className="box-item margin-60">
                      <a href="#!" target="blank" className="logo"><img className="img-responsive" src={Logo} alt="Logo" /></a>
                      <h4 className="text-center animated fadeInDown">entrar</h4>
                      <form action="home.php" method="POST" className="animated fadeIn">
                        <div className="form-group">
                          <input type="text" className="form-control" id placeholder="login" />
                        </div>
                        <div className="form-group">
                          <input type="password" name="password" className="form-control" id placeholder="senha" />
                        </div>
                        <button className="btn btn-block icon"><i className="fa fa-sign-in" /> Entrar</button>
                        <a href="#!" className="esqueceu-senha">Esqueci a senha »</a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            </div>
        );
    }
}
export default Login;   
import React, { Component } from 'react';
import LogoResponsive from '../../assets/img/logo-icon.png';
class Footer extends Component {

    render(){
        return(
            
      <footer className="footer hidden-xs">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <div className="copyright flex-space">
              <p>Copyright @ Big Fish Digital 2018. Todos os direitos reservados.</p>
              <a href="https://bigfishmedia.com.br/" target="blank"><img className="img-responsive logo-by" alt=""src={LogoResponsive} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
          );
    }
}
export default Footer;
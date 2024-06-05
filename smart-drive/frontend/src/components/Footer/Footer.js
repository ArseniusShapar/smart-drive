import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="page-footer font-small blue pt-4">
        <div className="container-fluid text-center text-md-left">
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <img src='../img/icon-light.png' id='footer-logo'/>
                </div>

                <hr className="clearfix w-100 d-md-none pb-0"/>

                <div className="col-md-2 mb-md-0 mb-3" id='footer-info'>
                    <h5 className="text-uppercase">Інформація</h5>
                    <ul className="list-unstyled">
                        <li><a href="/about">Про сервіс</a></li>
                        <li><a href="/contacts">Контакти</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="footer-copyright text-center py-3">© 2024 Smart Drive</div>

    </footer>
  )
}

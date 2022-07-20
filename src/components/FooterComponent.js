import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer bg-info px-3 py-2 border-bottom mb-3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8  col-sm-5 footer2">
            <NavLink to="/"><img src='assets/images/logo2.png' height="80" /></NavLink>
            <NavLink className="navbar-brand fw-bold fs-4 me-2" to="/">Ép Boardgame Store</NavLink>            <address>
              <i className="fa fa-phone fa-lg"></i>:+843 3389 2623<br />
              <i className="fa fa-envelope fa-lg"></i>:
              <a href="mailto:lthuan2809@gmail.com">lthuan2809@gmail.com </a>
            </address>
          </div>
          <div className="col-4 col-sm-3 footer1">
            <h5><u>Links</u></h5>
            <ul className="list-unstyled">
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/aboutus">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/menu">Menu</NavLink>
              </li>
              <li>
                <NavLink to="/contactus">Contact Us</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-4 footer3">
            <div className="">

              <div>
                <h5><u>Payment Methods</u></h5>
                <img src="/assets/images/Payment-Methods.png"></img>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer;
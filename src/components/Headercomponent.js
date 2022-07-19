import React from 'react'
import { NavLink } from 'react-router-dom';
import Cart from './buttons/Cart';
import Login from './buttons/Login';

const Header = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark mb-3">
                <div className="container">

                    <NavLink to="/"><img src='assets/images/logo2.png' height="80" /></NavLink>
                    <NavLink className="navbar-brand fw-bold fs-4 me-2" to="/">Ép Boardgame Store</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i className="fa-regular fa-bars"></i></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Product</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>

                    </div>

                </div>
            </nav>
            <div class="px-3 py-2 border-bottom mb-3">
                <div class="container d-flex flex-wrap justify-content-center">
                    <form class="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto" role="search">
                        <input type="search" class="form-control" placeholder="Search..." aria-label="Search" />
                    </form>

                    <Login />
                    <Cart />
                </div>
            </div>

        </div>
    );
}

export default Header;

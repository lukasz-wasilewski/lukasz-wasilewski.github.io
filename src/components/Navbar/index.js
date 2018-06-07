import React from "react";
import { NavLink } from "react-router-dom";
import './style.css';

const NavbarComponent = () => (
  <nav className="navbar is-fixed-top">
    <div className="container">
      <div className="navbar-brand">
        <span className="navbar-burger burger" data-target="navbarMenuHeroA">
          <span />
          <span />
          <span />
        </span>
      </div>
      <div id="navbarMenuHeroA" className="navbar-menu">
        <div className="navbar-end">
          <NavLink to="/" className="navbar-item" activeClassName='is-active'>
            Home
          </NavLink>
          <NavLink to="/cv" className="navbar-item" activeClassName='is-active'>
            Resume
          </NavLink>
          <NavLink to="/blog" className="navbar-item" activeClassName='is-active'>
            Blog
          </NavLink>
        </div>
      </div>
    </div>
  </nav>
);

export default NavbarComponent;

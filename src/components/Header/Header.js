import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  const location = useLocation();
  const isActive = (path) => {
    if (location.pathname === path) {
      return 'active';
    } else return '';
  };
  return (
    <header>
      <nav
        className="navbar navbar-navs navbar-expend navbar-expand-md fixed-top"
        id="menu-top"
      >
        <div className="container">
          <Link to="/" className="navbar-brand">
            IC
          </Link>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarDefault"
            aria-controls="navbarDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarDefault"
          >
            <ul className="navbar-nav ml-auto">
              <li className="menu-nav">
                <Link
                  to="/"
                  className={'nav-link page-scroll ' + isActive('/')}
                >
                  Home
                </Link>
              </li>
              <li className="menu-nav">
                <Link
                  to="/about"
                  className={'nav-link page-scroll ' + isActive('/about')}
                >
                  Sobre
                </Link>
              </li>
              <li className="menu-nav">
                <Link
                  to="/services"
                  className={'nav-link page-scroll ' + isActive('/services')}
                >
                  Serviços
                </Link>
              </li>
              <li className="menu-nav">
                <Link
                  to="/projects"
                  className={'nav-link page-scroll ' + isActive('/projects')}
                >
                  Projetos
                </Link>
              </li>
              <li className="menu-nav">
                <Link
                  to="/blog"
                  className={'nav-link page-scroll ' + isActive('/blog')}
                >
                  Blog
                </Link>
              </li>
              <li className="menu-nav">
                <Link
                  to="/contact"
                  className={'nav-link page-scroll ' + isActive('/contact')}
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;

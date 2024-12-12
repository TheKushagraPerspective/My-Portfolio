import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <>
      <div className="navbar-main">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="#">
              PORTFOLIO
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-between" id="navbarTogglerDemo02">
              {/* Left Side (PORTFOLIO text already handled by navbar-brand) */}
              <div></div>

              {/* Right Side Links */}
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item px-2">
                  <a href="#home" className="nav-link active">
                    Home
                  </a>
                </li>
                <li className="nav-item px-2">
                  <a href="#about" className="nav-link">
                    About
                  </a>
                </li>
                <li className="nav-item px-2">
                  <a href="#skills" className="nav-link">
                    Skills
                  </a>
                </li>
                <li className="nav-item px-2">
                  <a href="#portfolio" className="nav-link">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item px-2">
                  <a href="#contact" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;

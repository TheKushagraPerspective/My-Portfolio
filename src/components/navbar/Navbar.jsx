import React from 'react';
import { Link } from 'react-router-dom';
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
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-between" id="navbarTogglerDemo02">
              {/* Left Side (Optional: Placeholder for any additional left items) */}
              <div></div>

              {/* Right Side Links */}
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item px-2">
                  <Link to="/" className="nav-link active">
                    Home
                  </Link>
                </li>
                <li className="nav-item px-2">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item px-2">
                  <Link to="/skills" className="nav-link">
                    Skills
                  </Link>
                </li>
                <li className="nav-item px-2">
                  <Link to="/portfolio" className="nav-link">
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item px-2">
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
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

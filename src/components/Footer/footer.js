import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => (
  <div className="bg-light pt-4">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="">
            <nav className="navbar navbar-expand-lg rounded">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarsExample10"
                aria-controls="navbarsExample10"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>

              <div
                className="collapse navbar-collapse justify-content-md-center"
                id="navbarsExample10"
              >
                <ul className="navbar-nav">
                  <li>
                    <NavLink className="nav-link" to="/welcome">
                      Welcome
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    {/* <NavLink className="nav-link" exact to="/"> */}
                    <NavLink className="nav-link" exact to="/project/1">
                      My Projects
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-muted text-center py-2">
        © 2018 Copyright: David Wu
      </div>
    </div>
  </div>
);

export default Footer;

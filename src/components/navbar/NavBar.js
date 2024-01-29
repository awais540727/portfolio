import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
          <Link className="navbar-brand" to='/'>
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav me-auto ms-auto mb-2 mb-lg-0"
              style={{ margin: "0 20px" }}
            >
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="about">
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/project">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/contact">
                  Contact Me
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <i
                className="fa fa-search text-white mt-2 me-4"
                style={{ fontSize: "20px"}}
              ></i>
              <button className="btn btn-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

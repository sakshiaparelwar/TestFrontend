import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../pages/style.css";
function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-collapse" id="navbarNav">
        <ul className="navbarnav">
          <li className="nav-item">
            <Link className="nav-link" to="/signin">
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Log In
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/view">
              ViewData
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/departments">
              Departments
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/createdep">
              Create Department
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Header;

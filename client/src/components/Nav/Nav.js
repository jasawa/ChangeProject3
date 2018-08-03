import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      SSG-HOPICS
    </Link>
    <button
      className="navbar-toggler"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>    
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/api">API</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Blogs">General</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/logout">Log Out</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;

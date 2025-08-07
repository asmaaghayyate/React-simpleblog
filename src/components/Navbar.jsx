import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container" >
        <Link className="navbar-brand fw-bold" to="/">SimpleBlog</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center"  id="menu">
          <ul className="navbar-nav ">
            <li className="nav-item"><NavLink className="nav-link" to="/">Accueil</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/blog">Blog</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/about">À propos</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
          </ul>
        </div>
        <div className="justify-content-end ">
        <Link to="/new" className="btn-publier">
          Publier un article
        </Link>
      </div>
      </div>
    </nav>
  );
}

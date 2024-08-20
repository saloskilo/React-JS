import React, { Component } from "react";
import { Link } from "react-router-dom";

 const Navbar =()=>  {
  
    return (
      <div className="container mt-2">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid d-flex justify-content-between">
            <Link className="navbar-brand" to="/">
              SaloSkilo
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
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
               

                <li className="nav-item">
                  <Link className="nav-link" to="/">  Business</Link></li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">  Entertainment </Link></li>
                <li className="nav-item">
                  <Link className="nav-link" to="/general">  General </Link></li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">  Health </Link></li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science"> Science </Link></li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">  Sports </Link></li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">   Technology </Link></li>
              </ul>
            </div>

            <form className="form-inline my-2 my-lg-0 d-flex">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-sm  btn-outline-success my-2 my-sm-0 mx-2" type="submit">Search</button>
            </form>

          </div>
        </nav>
      </div>
    );
  
}
export default Navbar
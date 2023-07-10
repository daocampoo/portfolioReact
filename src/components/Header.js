import React from 'react';

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light custom-navbar">
        <div className="container">
          <a className="navbar-brand" href="index.html">Daniel Ocampo - Front-End Developer</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse custom-navmenu" id="main-navbar">
            <ul className="navbar-nav ml-auto custom-menu">
              <li className="nav-item">
                <a className="nav-link" href="index.html">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#blog">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#resume">Resume</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="row justify-content-center text-center mb-4">
          <div className="col-12 col-md-8">
            <h3 className="h3 heading">Hello. My name is Daniel Ocampo.</h3>
            <p>As a front-end developer, my expertise lies in crafting captivating digital experiences.</p>
            <a href="#portfolio" className="btn btn-primary btn-lg">View Portfolio</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
import React from 'react';

function Header() {
  return (
    <header class="header">
      <nav class="nav-bar">
          <a href="index.html">
              <div id="logo">
                  <img src="/assets/img/logo.png" alt="logo"/>
              </div>
          </a>
          
          <div class="nav-list">
              <ol>
                  <li><a href="#about">About.</a></li>
                  <li><a href="#portfolio">Portfolio.</a></li>
                  <li><a href="#blog">Blog.</a></li>
                  <li><a href="#contact">Contact.</a></li>
                  <li><a href="/assets/docx/resume.pdf" target="_blank">Resume.</a></li>
              </ol>
          </div>
      </nav>
    </header>
  );
}

export default Header;
import React from 'react';

function Footer() {
  return (
    <footer>
      <div id="social-list">
          <ul>
              <li>
                  <a href="https://www.linkedin.com/in/daocampo/" class="social-icon" target="_blank">
                      <img
                      src="/assets/img/linkedin/linkedin.png"
                      srcset="/assets/img/linkedin/linkedin-96.png 96w, /assets/img/linkedin/linkedin-48.png 48w, /assets/img/linkedin/linkedin-24.png 24w"
                      sizes="(max-width: 600px) 100vw, 50vw"
                      alt="Linkedin Icon"/>                  
                  </a>
              </li>
              <li>
                  <a href="https://github.com/da-ocampo" class="social-icon" target="_blank">
                      <img 
                      src="/assets/img/github/github.png"
                      srcset="/assets/img/github/github-96.png 96w, /assets/img/github/github-48.png 48w, /assets/img/github/github-24.png 24w"
                      sizes="(max-width: 600px) 100vw, 50vw"
                      alt="Github Icon"/>           
                  </a>
              </li>
          </ul>
      </div>

      <p><a href="https://github.com/da-ocampo" target="_blank" rel="noopener noreferrer">Designed and Built by Daniel Ocampo</a></p>
      <p><a href="mailto:daocampo2002@gmail.com" target="_blank" rel="noopener noreferrer">daocampo2002@gmail.com</a></p>
    </footer>
  );
}

export default Footer;
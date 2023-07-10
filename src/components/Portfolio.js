import React from 'react';

function Portfolio() {
  return (
    <section id="portfolio">
      <h2>Portfolio.</h2>
      <div className="section-content">
        <div className="portfolio-piece">
          <h3>
            <a href="https://ihateomerta.com/" target="_blank" rel="noopener noreferrer">
              ihateomerta.com
            </a>
          </h3>
          <p>
            Omerta is an experimental five-piece band hailing from Houston, Texas. The website, constructed using HTML, CSS, and JavaScript, serves as a centralized hub for fans. It provides links to various streaming services and social media platforms, along with essential information like tour dates and blog posts from band members. Additionally, the site features an e-commerce store built using Shopify.
          </p>
        </div>
        <div className="portfolio-piece">
          <h3>
            <a href="https://painproxy.com" target="_blank" rel="noopener noreferrer">
              painproxy.com
            </a>
          </h3>
          <p>
            Pain Proxy is a decentralized virtual venue within the Endproject network. It serves as a discrimination-free and censorship-free platform for artists of different mediums to showcase their artwork. The space aims to foster creativity and provide a safe environment for artistic expression. Built with HTML, CSS, and JavaScript, the website is currently inactive and will undergo further development as part of the official launch of END. END is an international, interdisciplinary collective that aims to overcome institutional barriers through decentralized applications and protocols.
          </p>
        </div>
        <div className="portfolio-piece">
          <h3>
            <a href="https://danielsgone.com/" target="_blank" rel="noopener noreferrer">
              danielsgone.com (v1)
            </a>
          </h3>
          <p>
            Daniel's Gone is an electronic music project based in Houston, Texas. The site is built using HTML, CSS, and JavaScript, serving as a hub for listeners by providing links to various popular streaming platforms and other ventures under the project's name. In addition to creating all front-end components, I also designed all website assets using Photoshop.
          </p>
          <p>Currently, the website is undergoing a rebranding process, hence the reference to "v1".</p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
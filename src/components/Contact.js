import React from 'react';

function Contact() {
  return (
    <section id="contact" style={{ textAlign: 'center' }}>
      <h2>Contact.</h2>
      <div className="section-content contact">
        <h3>Interested in what you've seen and would like to connect? feel free to drop me a message via email.</h3>
        <h3>I'm always up for a chat!</h3>
        <a href="mailto:daocampo2002@gmail.com" className="btn" target="_blank" rel="noopener noreferrer">Contact</a>
      </div>
    </section>
  );
}

export default Contact;
import React from 'react';
import Home from './Home';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Contact from './Contact';


function Main() {
  return (
    <div>
      <Home/>
      <About/>
      <Portfolio/>
      <Resume/>
      <Contact/>
    </div>
  );
}

export default Main;
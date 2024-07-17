import React from 'react';
import './App.css';
import Nav from './components/navbar/Nav';
import Hero from './components/hero-section/Hero';
import Section1 from './components/skills/Section1';
import Section2 from './components/experiences-section/Section2';
import About from './components/about/About';
import Section3 from './components/projects/Section3';
import Section4 from './components/testimonies/Section4';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <Section1 />
      <Section2 />
      <About />
      <Section3 />
      <Section4 />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

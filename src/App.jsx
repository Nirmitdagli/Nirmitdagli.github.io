import React from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Credentials from './components/Certifications.jsx';
import BeyondTheWork from './components/BeyondTheWork.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Credentials />
        <BeyondTheWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import React, { useState } from 'react';
import { MotionConfig } from 'framer-motion';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Impact from './components/Impact.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Architectures from './components/Architectures.jsx';
import Credentials from './components/Certifications.jsx';
import BeyondTheWork from './components/BeyondTheWork.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [selectedRole, setSelectedRole] = useState('all');
  return <MotionConfig reducedMotion="user">
    <a href="#main" className="skip-link">Skip to content</a>
    <Nav />
    <main id="main">
      <Hero onSelectRole={setSelectedRole} />
      <Impact />
      <Projects selectedRole={selectedRole} onSelectRole={setSelectedRole} />
      <Experience />
      <Architectures />
      <Credentials />
      <BeyondTheWork />
      <Contact />
    </main>
    <Footer />
  </MotionConfig>;
}

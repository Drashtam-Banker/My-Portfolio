/*

App.js
Drashtam Kinnar Banker
301497001
25 Jan 2025

*/
import React from 'react';
import About from './components/about/about.js';
import Contact from './components/Contact/contact.js';
import Footer from './components/Footer/footer.js';
import Intro from './components/Intro/intro.js';
import Navbar from "./components/NavBar/navbar.js";
import Skills from './components/Skills/skills.js';
import Works from './components/Works/works.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
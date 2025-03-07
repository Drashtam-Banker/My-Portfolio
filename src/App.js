/*

App.js
Drashtam Kinnar Banker
301497001
25 Jan 2025

*/
import React from 'react';
import About from './components/about/about';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import Intro from './components/Intro/intro';
import Navbar from "./components/NavBar/navbar";
import Skills from './components/Skills/skills';
import Works from './components/Works/works';

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

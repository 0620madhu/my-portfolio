import React from 'react';
import Header from './component/Header';
import About from './component/About';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Contact from './component/Contact';
import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </div>
);

export default App;

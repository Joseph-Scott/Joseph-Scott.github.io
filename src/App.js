import React from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';

const App = () => {
  return (
    <div>
      <Navigation />
      <Home />
      <Skills />
      <Projects />
    </div>
  );
};

export default App;
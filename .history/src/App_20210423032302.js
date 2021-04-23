import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Gallery from './components/gallery/Gallery'


function App() {
  return (
    <div className="App content-center">
      <Navbar />
      <Hero />
      <Gallery />
    </div>
  );
}

export default App;

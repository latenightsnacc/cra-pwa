import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Gallery from './components/gallery/Gallery'
import Pagination from './components/pagination/Pagination';


function App() {
  return (
    <div className="App content-center">
      <Navbar />
      <Hero />
      <Gallery />
      <Pagination />
    </div>
  );
}

export default App;

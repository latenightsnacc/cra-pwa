import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import LoadingHero from './components/hero/LoadingHero'
import Gallery from './components/gallery/Gallery'
import Pagination from './components/pagination/Pagination';
import Skeleton from './components/skeleton/Skeleton'

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <LoadingHero />
      <Gallery />
      <Pagination />
    </div>
  );
}

export default App;

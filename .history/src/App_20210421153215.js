import React from 'react';
import Navbar from './components/navbar/Navbar.js'
import PhotoOfTheDay from './components/potd/PhotoOfTheDay'

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Navbar></Navbar>
      <PhotoOfTheDay></PhotoOfTheDay>
    </div>
  );
}

export default App;

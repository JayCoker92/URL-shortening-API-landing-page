import React from 'react'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Boost from './components/Boost';
import Advance from './components/Advance';
import Showcase from './components/Showcase';
import Shortener from './components/Shortener';

import './App.css';

function App() {
  return (
    <>
      <div className='App'>
        <Navbar />
        <Showcase />
        <Shortener />
        <Advance />
        <Boost />
        <Footer />
      </div>
    </>
  );
}

export default App;
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Jobs from './Jobs';

function App() {
  return (
    <div className="App">
    <nav>

    </nav>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="about" element={ <About /> } />
        <Route path="Jobs" element={ <Jobs /> } />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

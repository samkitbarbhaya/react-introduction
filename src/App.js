import './App.css';
import Info from './components/Info';
import About from './components/About';
import Interest from './components/Interest';
import React from 'react'

function App() {
  return (

<div className="container">
      <div className="card">
        <Info />
        <About />
        <Interest />
      </div>
    </div>
  );
}

export default App;

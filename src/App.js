// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Trabajos from './pages/Trabajos';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trabajos" element={<Trabajos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
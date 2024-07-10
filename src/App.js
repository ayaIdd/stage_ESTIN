import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Bytecraft, Gdsc, Nexus, Sirius, Soai, Ldc, Sidebar } from './components';
import { Home,  Formation } from './pages';
import Club from './pages/Club';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div style={{ position: 'fixed', top: 0, left: 0,height:'100vh', backgroundColor: '#f0f0f0', zIndex: 1 }}>
        <Sidebar />
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/club" element={<Club />} />
          <Route path="/club/1" element={<Bytecraft />} />
          <Route path="/club/2" element={<Gdsc />} />
          <Route path="/club/3" element={<Ldc />} />
          <Route path="/club/4" element={<Soai />} />
          <Route path="/club/5" element={<Nexus />} />
          <Route path="/club/6" element={<Sirius />} />
          <Route path="/formation" element={<Formation />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

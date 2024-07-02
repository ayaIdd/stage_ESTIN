import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Bytecraft, Gdsc, Nexus, Sirius, Soai, Ldc } from './components';
import './App.css';

import { Home, AboutPage, ContactPage, PageNotFound } from "./pages";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/club/1" component={Bytecraft} />
      <Route path="/club/2" component={Gdsc} />
      <Route path="/club/3" component={Ldc} />
      <Route path="/club/4" component={Soai} />
      <Route path="/club/5" component={Nexus} />
      <Route path="/club/6" component={Sirius} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/product/*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

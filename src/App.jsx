import React, { useEffect, useState } from 'react';
import { api } from './Services/GlobalAPI';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Filmes from './Components/Filmes';
import Series from './Components/Series';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filmes" element={<Filmes />} />
          <Route path="/series" element={<Series />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

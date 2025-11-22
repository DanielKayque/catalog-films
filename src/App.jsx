import React, { useEffect, useState } from 'react';
import { api } from './Services/GlobalAPI';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Details from './Components/Details';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filme/:id" element={<Details />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

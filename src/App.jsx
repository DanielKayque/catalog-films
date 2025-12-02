import React from 'react';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Details from './Components/Details';
import Footer from './Components/Footer';

const BASE_PATH = "/catalog-films"

const App = () => {
  return (
    <div>
      <BrowserRouter basename={BASE_PATH}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="filme/:id" element={<Details />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

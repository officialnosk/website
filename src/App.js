import React from 'react';
import './App.css';
import { BrowserRouter , Route , Routes } from 'react-router-dom';

import HomePage from './containers/HomePage/HomePage';
import Contact from './components/Contact/Contact';
import Alumni from './components/Alumni/Alumni';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' exact element={<HomePage />} />
          <Route path='/' exact element={<HomePage />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/alumni" exact element={<Alumni />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
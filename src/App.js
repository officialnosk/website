import React from 'react';
import './App.css';
import { BrowserRouter , Route , Routes } from 'react-router-dom';

import HomePage from './containers/HomePage/HomePage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' exact element={<HomePage />} />
          <Route path='/' exact element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
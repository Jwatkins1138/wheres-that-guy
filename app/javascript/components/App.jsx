import React from 'react'
import Home from './Home'
import Select from './Select'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' exact element={<Home />} />
        <Route path='/' exact element={<Select />} />
      </Routes>
    </BrowserRouter>
  );  
};

export default App;
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import CarDetail from './pages/CarDetail';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} />} />
          <Route path="/car/:id" element={<CarDetail />} />
          <Route path="/brand/:brand" element={<Home searchQuery={searchQuery} />} />
          <Route path="/categories" element={<Home searchQuery={searchQuery} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
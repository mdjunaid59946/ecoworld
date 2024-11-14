import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Information } from './pages/Information';
import { LoginForm } from './components/LoginForm';
import { Awareness } from './pages/Awareness';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f')] bg-fixed bg-cover bg-center">
        <div className="min-h-screen bg-black/30">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/information" element={<Information />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/awareness" element={<Awareness />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
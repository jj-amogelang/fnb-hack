import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ServiceIcons from './components/ServiceIcons';
import PromoBanner from './components/PromoBanner';
import TopSpecialists from './components/TopSpecialists';
import HealthArticles from './components/HealthArticles';
import Footer from './components/Footer';
import DrAIPage from './components/DrAIPage'; // Import the DrAIPage component
import Home from './components/Home'; // Import the Home component

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <div className={`App ${theme}`}>
        <Header toggleTheme={toggleTheme} theme={theme} />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <h1>All services for your health</h1>
                <SearchBar />
                <ServiceIcons />
                <PromoBanner />
                <TopSpecialists />
                <HealthArticles />
              </>
            } />
            <Route path="/dr-ai" element={<DrAIPage />} /> {/* Route for DrAIPage */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
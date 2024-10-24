import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ServiceIcons from './components/ServiceIcons';
import PromoBanner from './components/PromoBanner';
import TopSpecialists from './components/TopSpecialists';
import HealthArticles from './components/HealthArticles';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`App ${theme}`}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <main>
        <h1>All services for your health</h1>
        <SearchBar />
        <ServiceIcons />
        <PromoBanner />
        <TopSpecialists />
        <HealthArticles />
      </main>
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ServiceIcons from './components/ServiceIcons';
import PromoBanner from './components/PromoBanner';
import TopSpecialists from './components/TopSpecialists';
import HealthArticles from './components/HealthArticles';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h1>All services for your health</h1>
        <SearchBar />
        <ServiceIcons />
        <PromoBanner />
        <TopSpecialists />
        <HealthArticles />
      </main>
    </div>
  );
}

export default App;
   // src/components/Home.js
   import React from 'react';
   import SearchBar from './SearchBar'; // Ensure these imports are correct
   import ServiceIcons from './ServiceIcons';
   import PromoBanner from './PromoBanner';
   import TopSpecialists from './TopSpecialists';
   import HealthArticles from './HealthArticles';

   const Home = () => {
       return (
           <div>
               <h1>All services for your health</h1>
               <SearchBar />
               <ServiceIcons />
               <PromoBanner />
               <TopSpecialists />
               <HealthArticles />
           </div>
       );
   };

   export default Home;
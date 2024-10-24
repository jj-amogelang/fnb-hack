import React from 'react';

const specialists = [
  { name: 'Dr. Marcus Horiz', specialty: 'Cardiologist', rating: 4.7, distance: '600 meters' },
  { name: 'Dr. Maria Elena', specialty: 'Psychologist', rating: 4.9, distance: '1.5km' },
  { name: 'Dr. Stevi Jessi', specialty: 'Orthopedist', rating: 4.8, distance: '2km' },
];

const TopSpecialists = () => (
  <section className="top-specialists">
    <h2>Top Specialists <span className="see-all">See all</span></h2>
    <div className="specialists-list">
      {specialists.map((specialist, index) => (
        <div key={index} className="specialist-card">
          <div className="specialist-image"></div>
          <h3>{specialist.name}</h3>
          <p>{specialist.specialty}</p>
          <p>⭐ {specialist.rating} • {specialist.distance}</p>
        </div>
      ))}
    </div>
  </section>
);

export default TopSpecialists;
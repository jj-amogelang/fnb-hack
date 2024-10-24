import React from 'react';
import { FaUserMd, FaPills, FaHospital, FaAmbulance } from 'react-icons/fa';

const ServiceIcons = () => (
  <div className="service-icons">
    <div className="icon">
      <FaUserMd />
      <p>Dr. AI</p>
    </div>
    <div className="icon">
      <FaPills />
      <p>Pharmacy</p>
    </div>
    <div className="icon">
      <FaHospital />
      <p>Clinics</p>
    </div>
    <div className="icon">
      <FaAmbulance />
      <p>Ambulance</p>
    </div>
  </div>
);

export default ServiceIcons;
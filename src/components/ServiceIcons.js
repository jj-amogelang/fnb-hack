import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { FaUserMd, FaPills, FaHospital, FaAmbulance } from 'react-icons/fa';

const ServiceIcons = () => (
  <div className="service-icons">
    <div className="icon">
      <Link to="/dr-ai"> {/* Wrap Dr. AI icon with Link */}
        <FaUserMd />
        <p>Dr. AI</p>
      </Link>
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
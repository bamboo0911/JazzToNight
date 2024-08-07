import React from 'react';
import { Link } from 'react-router-dom';

function VenueCard({ image, name, address, description }) {
  return (
    <div className="venue-card bg-white p-4 m-4 rounded shadow-lg">
      <img className="rounded mb-4" src={image} alt={name} />
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-700 mb-2">{address}</p>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link className="text-blue-500 hover:underline" to={`/venues/${name}`}>查看詳情</Link>
    </div>
  );
}

export default VenueCard;

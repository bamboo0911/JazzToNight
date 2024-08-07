import React from 'react';
import { Link } from 'react-router-dom';

function MusicianCard({ image, name, instrument, description }) {
  return (
    <div className="musician-card bg-white p-4 m-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img className="rounded-t-lg w-full h-48 object-cover" src={image} alt={name} />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-700 mb-2">{instrument}</p>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link className="text-accent hover:underline" to={`/musicians/${name}`}>查看詳情</Link>
      </div>
    </div>
  );
}

export default MusicianCard;

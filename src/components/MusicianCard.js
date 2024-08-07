import React from 'react';
import { Link } from 'react-router-dom';

function MusicianCard({ image, name, instrument, description }) {
  return (
    <Link to={`/musicians/${name}`} className="block bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl m-4 border border-gray-200">
      <div className="relative">
        <img className="w-full h-60 object-cover" src={`/images/${image}`} alt={name} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
      </div>
      <div className="p-6">
        <h3 className="text-3xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{name}</h3>
        <p className="text-gray-700 dark:text-gray-400 mb-4">{instrument}</p>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
      </div>
    </Link>
  );
}

export default MusicianCard;

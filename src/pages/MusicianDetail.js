import React from 'react';
import { useParams } from 'react-router-dom';

function MusicianDetail() {
  const { name } = useParams();
  const musician = {
    image: 'musician1.jpg', 
    name: '樂手 1', 
    instrument: '樂器 1', 
    description: '詳細描述 1',
    bio: '這是樂手 1 的詳細介紹...'
  };

  return (
    <div className="musician-detail p-4 max-w-4xl mx-auto">
      <img className="w-full h-60 object-cover rounded-lg mb-4" src={`/images/${musician.image}`} alt={musician.name} />
      <h2 className="text-4xl font-semibold mb-4 text-accent">{musician.name}</h2>
      <p className="text-gray-700 dark:text-gray-400 mb-4">{musician.instrument}</p>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{musician.description}</p>
      <h3 className="text-2xl font-semibold mb-4 text-accent">介紹</h3>
      <p className="text-gray-600 dark:text-gray-300">{musician.bio}</p>
    </div>
  );
}

export default MusicianDetail;

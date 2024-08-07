import React from 'react';
import MusicianCard from '../components/MusicianCard';

function Musicians() {
  const musicians = [
    { image: 'musician1.jpg', name: '樂手 1', instrument: '樂器 1', description: '描述 1' },
    { image: 'musician2.jpg', name: '樂手 2', instrument: '樂器 2', description: '描述 2' },
    // 更多的測試數據...
  ];

  return (
    <div className="musicians p-4">
      <h2 className="text-center text-4xl mb-4 text-accent">樂手</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {musicians.map((musician, index) => (
          <MusicianCard
            key={index}
            image={musician.image}
            name={musician.name}
            instrument={musician.instrument}
            description={musician.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Musicians;

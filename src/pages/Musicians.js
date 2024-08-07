import React from 'react';
import MusicianCard from '../components/MusicianCard';

const musicians = [
  {
    image: '/path/to/musician1.jpg',
    name: '樂手 1',
    instrument: '樂器 1',
    description: '這是樂手 1 的簡介。',
  },
  {
    image: '/path/to/musician2.jpg',
    name: '樂手 2',
    instrument: '樂器 2',
    description: '這是樂手 2 的簡介。',
  },
  {
    image: '/path/to/musician3.jpg',
    name: '樂手 3',
    instrument: '樂器 3',
    description: '這是樂手 3 的簡介。',
  },
  // 添加更多樂手
];

function Musicians() {
  return (
    <div className="musicians p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-accent">樂手列表</h1>
      <div className="musicians-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

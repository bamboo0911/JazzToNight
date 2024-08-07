import React from 'react';
import { useParams } from 'react-router-dom';

const musicianDetails = {
  '樂手 1': {
    image: '/path/to/musician1.jpg',
    name: '樂手 1',
    instrument: '樂器 1',
    description: '這是樂手 1 的詳細介紹。',
    performances: ['演出 1', '演出 2'],
    albums: ['專輯 1', '專輯 2'],
  },
  '樂手 2': {
    image: '/path/to/musician2.jpg',
    name: '樂手 2',
    instrument: '樂器 2',
    description: '這是樂手 2 的詳細介紹。',
    performances: ['演出 3', '演出 4'],
    albums: ['專輯 3', '專輯 4'],
  },
  '樂手 3': {
    image: '/path/to/musician3.jpg',
    name: '樂手 3',
    instrument: '樂器 3',
    description: '這是樂手 3 的詳細介紹。',
    performances: ['演出 5', '演出 6'],
    albums: ['專輯 5', '專輯 6'],
  },
  // 添加更多樂手的詳細介紹
};

function MusicianDetail() {
  const { id } = useParams();
  const musician = musicianDetails[id];

  if (!musician) {
    return <div>樂手未找到</div>;
  }

  return (
    <div className="musician-detail">
      <h1>{musician.name}</h1>
      <img src={musician.image} alt={musician.name} />
      <p>{musician.instrument}</p>
      <p>{musician.description}</p>
      <h3>演出歷史</h3>
      <ul>
        {musician.performances.map((performance, index) => (
          <li key={index}>{performance}</li>
        ))}
      </ul>
      <h3>專輯</h3>
      <ul>
        {musician.albums.map((album, index) => (
          <li key={index}>{album}</li>
        ))}
      </ul>
    </div>
  );
}

export default MusicianDetail;

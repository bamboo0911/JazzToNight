import React from 'react';
import { useParams } from 'react-router-dom';

const venueDetails = {
  '場所 1': {
    image: '/path/to/venue1.jpg',
    name: '場所 1',
    address: '地址 1',
    description: '這是場所 1 的詳細介紹。',
    events: ['活動 1', '活動 2'],
    facilities: ['設施 1', '設施 2'],
  },
  '場所 2': {
    image: '/path/to/venue2.jpg',
    name: '場所 2',
    address: '地址 2',
    description: '這是場所 2 的詳細介紹。',
    events: ['活動 3', '活動 4'],
    facilities: ['設施 3', '設施 4'],
  },
  '場所 3': {
    image: '/path/to/venue3.jpg',
    name: '場所 3',
    address: '地址 3',
    description: '這是場所 3 的詳細介紹。',
    events: ['活動 5', '活動 6'],
    facilities: ['設施 5', '設施 6'],
  },
  // 添加更多場所的詳細介紹
};

function VenueDetail() {
  const { id } = useParams();
  const venue = venueDetails[id];

  if (!venue) {
    return <div>場所未找到</div>;
  }

  return (
    <div className="venue-detail">
      <h1>{venue.name}</h1>
      <img src={venue.image} alt={venue.name} />
      <p>{venue.address}</p>
      <p>{venue.description}</p>
      <h3>未來活動</h3>
      <ul>
        {venue.events.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ul>
      <h3>設施</h3>
      <ul>
        {venue.facilities.map((facility, index) => (
          <li key={index}>{facility}</li>
        ))}
      </ul>
    </div>
  );
}

export default VenueDetail;

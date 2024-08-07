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
    <div className="venue-detail p-4">
      <h1 className="text-4xl font-bold mb-4 text-center text-accent">{venue.name}</h1>
      <img className="w-full h-96 object-cover rounded-lg mb-4" src={venue.image} alt={venue.name} />
      <p className="text-lg text-gray-700 mb-4">{venue.address}</p>
      <p className="text-gray-600 mb-6">{venue.description}</p>
      <h3 className="text-2xl font-semibold mb-2">未來活動</h3>
      <ul className="list-disc list-inside mb-4">
        {venue.events.map((event, index) => (
          <li key={index} className="text-gray-600">{event}</li>
        ))}
      </ul>
      <h3 className="text-2xl font-semibold mb-2">設施</h3>
      <ul className="list-disc list-inside">
        {venue.facilities.map((facility, index) => (
          <li key={index} className="text-gray-600">{facility}</li>
        ))}
      </ul>
    </div>
  );
}

export default VenueDetail;

import React from 'react';
import VenueCard from '../components/VenueCard';

const venues = [
  {
    image: '/path/to/venue1.jpg',
    name: '場所 1',
    address: '地址 1',
    description: '這是場所 1 的簡介。',
  },
  {
    image: '/path/to/venue2.jpg',
    name: '場所 2',
    address: '地址 2',
    description: '這是場所 2 的簡介。',
  },
  {
    image: '/path/to/venue3.jpg',
    name: '場所 3',
    address: '地址 3',
    description: '這是場所 3 的簡介。',
  },
  // 添加更多場所
];

function Venues() {
  return (
    <div className="venues">
      <h1>展演場所</h1>
      <div className="venues-list">
        {venues.map((venue, index) => (
          <VenueCard
            key={index}
            image={venue.image}
            name={venue.name}
            address={venue.address}
            description={venue.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Venues;

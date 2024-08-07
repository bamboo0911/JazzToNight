import React from 'react';
import VenueCard from '../components/VenueCard';

function Venues() {
  const venues = [
    { image: 'venue1.jpg', name: '場所 1', address: '地址 1', description: '描述 1' },
    { image: 'venue2.jpg', name: '場所 2', address: '地址 2', description: '描述 2' },
    // 更多的測試數據...
  ];

  return (
    <div className="venues p-4">
      <h2 className="text-center text-4xl mb-4 text-accent">展演場所</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

import React from 'react';
import { useParams } from 'react-router-dom';

function VenueDetail() {
  const { name } = useParams();
  const venue = {
    image: 'venue1.jpg', 
    name: '場所 1', 
    address: '地址 1', 
    description: '描述 1',
    events: [
      { date: '2024-08-01', event: '演出 1' },
      { date: '2024-08-02', event: '演出 2' },
    ]
  };

  return (
    <div className="venue-detail p-4 max-w-4xl mx-auto">
      <img className="w-full h-60 object-cover rounded-lg mb-4" src={`/images/${venue.image}`} alt={venue.name} />
      <h2 className="text-4xl font-semibold mb-4 text-accent">{venue.name}</h2>
      <p className="text-gray-700 dark:text-gray-400 mb-4">{venue.address}</p>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{venue.description}</p>
      <h3 className="text-2xl font-semibold mb-4 text-accent">未來活動</h3>
      <ul className="list-disc list-inside">
        {venue.events.map((event, index) => (
          <li key={index} className="text-gray-600 dark:text-gray-300 mb-2">
            <span className="font-semibold">{event.date}:</span> {event.event}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VenueDetail;

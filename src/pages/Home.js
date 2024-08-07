import React from 'react';
import Carousel from '../components/Carousel';
import FuturePicks from '../components/FuturePicks';

function Home() {
  return (
    <div className="home">
      <Carousel />
      <FuturePicks />
    </div>
  );
}

export default Home;

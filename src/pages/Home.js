import React from 'react';
import Carousel from '../components/Carousel';
import FuturePicks from '../components/FuturePicks';

function Home() {
  return (
    <div className="home">
      <h1>歡迎來到 Jazz To Night</h1>
      <Carousel />
      <FuturePicks />
    </div>
  );
}

export default Home;

import React from 'react';

const picks = [
  { src: '/path/to/image1.jpg', title: '精選演出 1', description: '精選演出 1 的簡介' },
  { src: '/path/to/image2.jpg', title: '精選演出 2', description: '精選演出 2 的簡介' },
  { src: '/path/to/image3.jpg', title: '精選演出 3', description: '精選演出 3 的簡介' },
];

function FuturePicks() {
  return (
    <div className="future-picks my-8">
      <h2 className="text-center text-3xl mb-4">未來精選</h2>
      <div className="flex flex-wrap justify-center">
        {picks.map((pick, index) => (
          <div
            key={index}
            className="future-pick m-4 p-4 w-64 h-64 bg-cover bg-center text-white"
            style={{ backgroundImage: `url(${pick.src})` }}
          >
            <h3 className="text-2xl">{pick.title}</h3>
            <p className="text-lg">{pick.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FuturePicks;

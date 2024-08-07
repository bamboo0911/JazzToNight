import React from 'react';

const picks = [
  { src: '/path/to/image1.jpg', title: '精選演出 1', description: '精選演出 1 的簡介' },
  { src: '/path/to/image2.jpg', title: '精選演出 2', description: '精選演出 2 的簡介' },
  { src: '/path/to/image3.jpg', title: '精選演出 3', description: '精選演出 3 的簡介' },
];

function FuturePicks() {
  return (
    <div className="future-picks my-8">
      <h2 className="text-center text-4xl font-bold mb-8 text-accent">未來精選</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {picks.map((pick, index) => (
          <div
            key={index}
            className="relative future-pick p-4 w-80 h-80 bg-cover bg-center text-white flex flex-col justify-end transform transition-transform hover:scale-105 shadow-lg hover:shadow-xl rounded-lg overflow-hidden"
            style={{ backgroundImage: `url(${pick.src})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
            <div className="relative p-4">
              <h3 className="text-2xl font-bold">{pick.title}</h3>
              <p className="text-lg">{pick.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FuturePicks;

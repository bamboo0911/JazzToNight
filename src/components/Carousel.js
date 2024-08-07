import React, { useState } from 'react';

const images = [
  { src: '/path/to/image1.jpg', title: '演出 1', description: '演出 1 的簡介' },
  { src: '/path/to/image2.jpg', title: '演出 2', description: '演出 2 的簡介' },
  { src: '/path/to/image3.jpg', title: '演出 3', description: '演出 3 的簡介' },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform transform ${index === currentIndex ? 'translate-x-0' : 'translate-x-full'} w-full h-full bg-cover bg-center`}
          style={{ backgroundImage: `url(${image.src})` }}
        >
          <div className="bg-black bg-opacity-50 text-white p-4">
            <h3 className="text-2xl">{image.title}</h3>
            <p className="text-lg">{image.description}</p>
          </div>
        </div>
      ))}
      <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2" onClick={prevSlide}>‹</button>
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2" onClick={nextSlide}>›</button>
    </div>
  );
}

export default Carousel;

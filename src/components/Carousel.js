import React, { useState, useEffect } from 'react';

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

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // 自動播放時間間隔

    return () => clearInterval(interval); // 清除計時器
  }, []);

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out transform ${index === currentIndex ? 'translate-x-0' : 'translate-x-full'} w-full h-full bg-cover bg-center`}
          style={{ backgroundImage: `url(${image.src})` }}
        >
          <div className="bg-gradient-to-t from-black to-transparent text-white p-4 flex flex-col justify-center items-center h-full">
            <h3 className="text-4xl font-bold mb-2">{image.title}</h3>
            <p className="text-xl">{image.description}</p>
          </div>
        </div>
      ))}
      <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary bg-opacity-50 text-textPrimary p-4" onClick={prevSlide}>‹</button>
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary bg-opacity-50 text-textPrimary p-4" onClick={nextSlide}>›</button>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${index === currentIndex ? 'bg-accent' : 'bg-gray-500'}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;

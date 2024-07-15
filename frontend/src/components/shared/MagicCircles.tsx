import React, { useState, useEffect } from 'react';

interface ImageProperties {
  id: number;
  src: string;
  top: number;
  left: number;
  size: number;
  visible: boolean;
}

const MagicCircles: React.FC = () => {
  const [images, setImages] = useState<ImageProperties[]>([]);

  useEffect(() => {
    const createRandomImages = () => {
      const numberOfImages = Math.floor(Math.random() * 6) + 5;
      const newImages: ImageProperties[] = [];

      for (let i = 0; i < numberOfImages; i++) {
        newImages.push({
          id: i,
          src: 'https://w7.pngwing.com/pngs/256/454/png-transparent-transmutation-circle-magic-circle-fairy-magic-purple-libra-symmetry-thumbnail.png',
          top: Math.floor(Math.random() * window.innerHeight),
          left: Math.floor(Math.random() * window.innerWidth),
          size: Math.floor(Math.random() * 100) + 100,
          visible: true,
        });
      }

      setImages(newImages);
    };

    createRandomImages();
  }, []);

  useEffect(() => {
    const intervals = images.map(image => {
      return setInterval(() => {
        setImages(prevImages =>
          prevImages.map(img =>
            img.id === image.id
              ? {
                  ...img,
                  visible: !img.visible,
                  top: Math.floor(Math.random() * window.innerHeight - 300) + 150,
                  left: Math.floor(Math.random() * window.innerWidth - 300) + 150,
                  size: Math.floor(Math.random() * 100) + 50,
                }
              : img
          )
        );
      }, Math.random() * 3000 + 2000);
    });

    return () => intervals.forEach(interval => clearInterval(interval), console.log(intervals));
  }, [images]); 

  return (
    <div>
        {window.innerHeight}
        <div style={{position: 'absolute', top: `${window.innerHeight}`, left: `${window.innerWidth}`, width: `${100}px`, height: `${100}px`}} className="bg-red-8"></div>
      {images.map(image => (
        <img
          key={image.id}
          src={image.src}
          style={{
            position: 'absolute',
            top: `${image.top}px`,
            left: `${image.left - image.size}px`,
            width: `${image.size}px`,
            height: `${image.size}px`,
            opacity: image.visible ? 0.2 : 0.3,
            transition: `opacity 1s, top 0s, left 0s, width 0s, height 0s`,
          }}
          className="rounded-full flex box-shadow shadow-white animate-spin-slow opacity-20"
        />
      ))}
    </div>
  );
};

export default MagicCircles;

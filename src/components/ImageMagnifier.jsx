import React, { useState } from 'react';

const ImageMagnifier = ({ src, zoom = 2.5 }) => {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierStyle, setMagnifierStyle] = useState({});

  const handleMouseMove = (e) => {
    const { top, left, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const backgroundX = (x / width) * 100;
    const backgroundY = (y / height) * 100;

    // Prevent magnifier from overflowing image bounds
    const magnifierSize = 200; // Set smaller for responsiveness
    let posX = x + 20;
    let posY = y - magnifierSize / 2;

    // Shift left if going out of right bound
    if (posX + magnifierSize > width) posX = x - magnifierSize - 20;
    if (posX < 0) posX = 0;
    if (posY < 0) posY = 0;
    if (posY + magnifierSize > height) posY = height - magnifierSize;

    setMagnifierStyle({
      top: `${posY}px`,
      left: `${posX}px`,
      width: `${magnifierSize}px`,
      height: `${magnifierSize}px`,
      backgroundImage: `url(${src})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: `${width * zoom}px ${height * zoom}px`,
      backgroundPosition: `${backgroundX}% ${backgroundY}%`,
    });
  };

  return (
    <div
      className="relative w-full h-[400px] md:w-full overflow-hidden"
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={handleMouseMove}
    >
      <img
        src={src}
        alt="Zoomable"
        className="w-full h-full object-contain rounded shadow-lg"
      />

      {showMagnifier && (
        <div
          className="absolute border border-black z-[999] pointer-events-none rounded shadow-md bg-white"
          style={magnifierStyle}
        />
      )}
    </div>
  );
};

export default ImageMagnifier;

"use client";

import { useState } from "react";

export default function ProductDetailImage({ image, name }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const images = image ? [image, image, image] : [];

  return (
    <div className="space-y-4">
      <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
        <img
          src={images[0]}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`aspect-square rounded-lg overflow-hidden ${
              selectedImage === index ? "ring-2 ring-blue-500" : ""
            }`}
          >
            <img
              src={image}
              alt={`${name} ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

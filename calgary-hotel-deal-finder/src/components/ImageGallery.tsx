"use client";

import Image from 'next/image';
import { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div>
      <div className="relative h-96 mb-4">
        <Image
          src={mainImage}
          alt="Main hotel image"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="grid grid-cols-5 gap-2">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative h-20 cursor-pointer border-2 ${
              mainImage === image ? 'border-blue-500' : 'border-transparent'
            } rounded-md`}
            onClick={() => setMainImage(image)}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

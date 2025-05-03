"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  images: string[];
}

export function ProductImages({ images }: ProductImagesProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="aspect-square w-full relative bg-secondary">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-muted-foreground">No image available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="aspect-square w-full relative">
        <Image
          src={images[selectedImage]}
          alt="Product image"
          fill
          className="object-cover"
          priority
        />
      </div>
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((image, index) => (
            <div
              key={index}
              className={`aspect-square relative cursor-pointer border-2 ${
                selectedImage === index ? "border-primary" : "border-transparent"
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image}
                alt={`Product thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

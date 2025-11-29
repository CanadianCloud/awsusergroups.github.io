import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// Import gallery images
import img1 from '../../assets/gallery/AWSDay24-092.jpg';
import img2 from '../../assets/gallery/AWSDay24-050.jpg';
import img3 from '../../assets/gallery/AWSDay24-110.jpg';
import img4 from '../../assets/gallery/AWSDay24-119.jpg';
import img5 from '../../assets/gallery/AWSDay24-123.jpg';
import img6 from '../../assets/gallery/AWSDay24-322.jpg';
import img7 from '../../assets/gallery/AWSDay24-376.jpg';
import img8 from '../../assets/gallery/AWSDay24-400.jpg';

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [
    { src: img1 },
    { src: img2 },
    { src: img3 },
    { src: img4 },
    { src: img5 },
    { src: img6 },
    { src: img7 },
    { src: img8 },
  ];

  const slides = images.map((img) => ({ src: img.src }));

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setOpen(true);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          Gallery
        </h2>
        
        {/* Masonry Grid Layout - fills all space */}
        <div className="grid grid-cols-2 md:grid-cols-6 auto-rows-[250px] gap-4">
          {/* Large feature image - spans 4 cols × 2 rows */}
          <button
            onClick={() => openLightbox(0)}
            className="relative col-span-2 md:col-span-4 md:row-span-2 overflow-hidden rounded-lg group cursor-pointer bg-gray-200"
          >
            <img
              src={images[0].src}
              alt="Gallery image 1"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
          </button>

          {/* Right side - 2 images stacked */}
          <button
            onClick={() => openLightbox(1)}
            className="relative col-span-1 md:col-span-2 md:row-span-1 overflow-hidden rounded-lg group cursor-pointer bg-gray-200"
          >
            <img
              src={images[1].src}
              alt="Gallery image 2"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
          </button>

          <button
            onClick={() => openLightbox(2)}
            className="relative col-span-1 md:col-span-2 md:row-span-1 overflow-hidden rounded-lg group cursor-pointer bg-gray-200"
          >
            <img
              src={images[2].src}
              alt="Gallery image 3"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
          </button>

          {/* Bottom row - 3 images of 2 cols each */}
          <button
            onClick={() => openLightbox(3)}
            className="relative col-span-1 md:col-span-2 md:row-span-1 overflow-hidden rounded-lg group cursor-pointer bg-gray-200"
          >
            <img
              src={images[3].src}
              alt="Gallery image 4"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
          </button>

          <button
            onClick={() => openLightbox(4)}
            className="relative col-span-1 md:col-span-2 md:row-span-1 overflow-hidden rounded-lg group cursor-pointer bg-gray-200"
          >
            <img
              src={images[4].src}
              alt="Gallery image 5"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
          </button>

          <button
            onClick={() => openLightbox(5)}
            className="relative col-span-2 md:col-span-2 md:row-span-1 overflow-hidden rounded-lg group cursor-pointer bg-gray-200"
          >
            <img
              src={images[5].src}
              alt="Gallery image 6"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
          </button>

          {/* Extra row */}
          <button
            onClick={() => openLightbox(6)}
            className="relative col-span-1 md:col-span-3 md:row-span-1 overflow-hidden rounded-lg group cursor-pointer bg-gray-200"
          >
            <img
              src={images[6].src}
              alt="Gallery image 7"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
          </button>

          <button
            onClick={() => openLightbox(7)}
            className="relative col-span-1 md:col-span-3 md:row-span-1 overflow-hidden rounded-lg group cursor-pointer bg-gray-200"
          >
            <img
              src={images[7].src}
              alt="Gallery image 8"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
          </button>
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          index={photoIndex}
          on={{
            view: ({ index }) => setPhotoIndex(index),
          }}
        />
      </div>
    </section>
  );
}





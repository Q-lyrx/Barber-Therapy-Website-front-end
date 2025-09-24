import { useState } from 'react';
import ImageLightbox from '@/components/image-lightbox';
import GalleryCarousel from '@/components/gallery-carousel';

// Import all gallery images
import gallery1 from '@/assets/gallery/gallery-1.webp';
import gallery2 from '@/assets/gallery/gallery-2.webp';
import gallery3 from '@/assets/gallery/gallery-3.webp';
import gallery4 from '@/assets/gallery/gallery-4.webp';
import gallery5 from '@/assets/gallery/gallery-5.webp';
import gallery6 from '@/assets/gallery/gallery-6.webp';
import gallery7 from '@/assets/gallery/gallery-7.webp';
import gallery8 from '@/assets/gallery/gallery-8.webp';
import gallery9 from '@/assets/gallery/gallery-9.webp';
import gallery10 from '@/assets/gallery/gallery-10.webp';
import gallery11 from '@/assets/gallery/gallery-11.webp';
import gallery12 from '@/assets/gallery/gallery-12.webp';
import gallery13 from '@/assets/gallery/gallery-13.webp';

const allImages = [
  gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, 
  gallery8, gallery9, gallery10, gallery11, gallery12, gallery13
];

const featuredImages = allImages.slice(0, 4);
const carouselImages = allImages.slice(4);

export default function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="gallery" className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-brand-gold mb-6">
            Gallery
          </h2>
          <p className="text-xl text-brand-white/80 max-w-3xl mx-auto">
            Warning: These pics might make you book an appointment.
          </p>
        </div>

        {/* Featured Images Grid (First 4) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {featuredImages.map((image, index) => (
            <div 
              key={index}
              className="group cursor-pointer overflow-hidden rounded-lg h-64"
              onClick={() => openLightbox(index)}
              data-testid={`featured-image-${index}`}
            >
              <img 
                src={image}
                alt={`Featured barbershop work ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Carousel for Remaining Images */}
        <GalleryCarousel 
          images={carouselImages}
          onImageClick={openLightbox}
        />
      </div>

      {/* Image Lightbox */}
      <ImageLightbox
        images={allImages}
        isOpen={lightboxOpen}
        initialIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
}

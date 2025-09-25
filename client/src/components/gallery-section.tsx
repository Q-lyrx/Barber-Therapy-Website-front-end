import { useState, useMemo } from 'react';
import ImageLightbox from '@/components/image-lightbox';
import GalleryCarousel from '@/components/gallery-carousel';

export default function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Dynamic image loading for better performance - only load when needed
  const allImages = useMemo(() => {
    return Array.from({ length: 13 }, (_, index) => 
      `/src/assets/gallery/gallery-${index + 1}.webp`
    );
  }, []);

  const featuredImages = useMemo(() => allImages.slice(0, 4), [allImages]);
  const carouselImages = useMemo(() => allImages.slice(4), [allImages]);

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
              data-testid={`featured-image-${index}`}
            >
              <img
                src={image}
                alt={`Featured barbershop work ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                onClick={() => openLightbox(index)}
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

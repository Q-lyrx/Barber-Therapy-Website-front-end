import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LazyImage from '@/components/lazy-image';

interface GalleryCarouselProps {
  images: string[];
  onImageClick: (index: number) => void;
}

export default function GalleryCarousel({ images, onImageClick }: GalleryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const imageWidth = 320; // w-80 = 320px
    const scrollPosition = index * (imageWidth + 24); // 24px gap
    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
    setCurrentIndex(index);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    scrollToIndex(nextIndex);
  };

  const goToPrevious = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    scrollToIndex(prevIndex);
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const imageWidth = 320 + 24; // width + gap
    const newIndex = Math.round(scrollLeft / imageWidth);
    setCurrentIndex(Math.min(newIndex, images.length - 1));
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl md:text-3xl font-bold text-brand-gold">
          More of Our Work
        </h3>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={goToPrevious}
            className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black"
            data-testid="carousel-previous"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={goToNext}
            className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black"
            data-testid="carousel-next"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div 
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
        onScroll={handleScroll}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 h-80 cursor-pointer group overflow-hidden rounded-lg"
            data-testid={`carousel-image-${index}`}
          >
            <LazyImage
              src={image}
              alt={`Barbershop work ${index + 5}`}
              className="group-hover:scale-110 transition-transform duration-500"
              onClick={() => onImageClick(index + 4)} // +4 because carousel starts after first 4 images
            />
          </div>
        ))}
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-6 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-brand-gold' : 'bg-brand-white/30'
            }`}
            data-testid={`carousel-dot-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
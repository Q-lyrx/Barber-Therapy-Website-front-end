import { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ImageLightboxProps {
  images: string[];
  isOpen: boolean;
  initialIndex: number;
  onClose: () => void;
}

export default function ImageLightbox({ images, isOpen, initialIndex, onClose }: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchStartTime = useRef<number>(0);
  const currentOffsetX = useRef<number>(0);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    if (imageContainerRef.current) {
      imageContainerRef.current.style.transform = 'translateX(0)';
      imageContainerRef.current.style.transition = 'none';
    }
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const applyTransform = (offsetX: number) => {
    if (imageContainerRef.current) {
      imageContainerRef.current.style.transform = `translateX(${offsetX}px)`;
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (isTransitioning) return;
    touchStartX.current = e.touches[0].clientX;
    touchStartTime.current = Date.now();
    currentOffsetX.current = 0;
    
    if (imageContainerRef.current) {
      imageContainerRef.current.style.transition = 'none';
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isTransitioning) return;
    
    const currentX = e.touches[0].clientX;
    const deltaX = currentX - touchStartX.current;
    currentOffsetX.current = deltaX;
    
    requestAnimationFrame(() => {
      applyTransform(deltaX);
    });
  };

  const handleTouchEnd = () => {
    if (isTransitioning) return;
    
    const swipeDistance = currentOffsetX.current;
    const swipeTime = Date.now() - touchStartTime.current;
    const velocity = Math.abs(swipeDistance) / swipeTime;
    
    const swipeThreshold = 30;
    const velocityThreshold = 0.3;
    
    const shouldNavigate = 
      Math.abs(swipeDistance) > swipeThreshold || 
      velocity > velocityThreshold;

    if (imageContainerRef.current) {
      imageContainerRef.current.style.transition = 'transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)';
    }

    if (shouldNavigate && Math.abs(swipeDistance) > 10) {
      setIsTransitioning(true);
      
      if (swipeDistance < 0) {
        goToNext();
      } else {
        goToPrevious();
      }
      
      setTimeout(() => {
        applyTransform(0);
        setIsTransitioning(false);
      }, 50);
    } else {
      applyTransform(0);
    }

    touchStartX.current = 0;
    currentOffsetX.current = 0;
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
      onClick={onClose}
      data-testid="lightbox-overlay"
    >
      {/* Close button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:bg-white/20 z-50"
        data-testid="lightbox-close"
      >
        <X className="h-6 w-6" />
      </Button>

      {/* Navigation buttons */}
      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 text-white hover:bg-white/20 z-50"
            data-testid="lightbox-previous"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 text-white hover:bg-white/20 z-50"
            data-testid="lightbox-next"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </>
      )}

      {/* Image container */}
      <div 
        ref={imageContainerRef}
        className="max-w-screen max-h-screen p-8 flex items-center justify-center touch-pan-y will-change-transform"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ touchAction: 'pan-y' }}
      >
        <img
          src={images[currentIndex]}
          alt={`Gallery image ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl select-none pointer-events-none"
          data-testid={`lightbox-image-${currentIndex}`}
          draggable={false}
        />
      </div>

      {/* Image counter */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
}
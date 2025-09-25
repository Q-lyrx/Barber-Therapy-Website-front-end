import { memo } from 'react';
import { useLazyImage } from '@/hooks/use-lazy-image';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
  placeholder?: string;
}

const LazyImage = memo(function LazyImage({ src, alt, className = '', onClick, placeholder }: LazyImageProps) {
  const { imgRef, imageSrc, isLoaded } = useLazyImage({ src, placeholder });

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        onClick={onClick}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } w-full h-full object-cover cursor-pointer`}
        loading="lazy"
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-brand-black/5 to-brand-black/20 backdrop-blur-sm">
          <div className="w-full h-full bg-brand-black/10 animate-pulse"></div>
        </div>
      )}
    </div>
  );
});

export default LazyImage;
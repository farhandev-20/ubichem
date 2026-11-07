'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSlide {
  src: string;
  alt: string;
}

interface HeroCarouselProps {
  slides?: HeroSlide[];
  images?: HeroSlide[];
}

export function HeroCarousel({ slides, images }: HeroCarouselProps) {
  const allSlides = slides || images || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const totalSlides = allSlides.length;

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentIndex((index + totalSlides) % totalSlides);
      setTimeout(() => setIsTransitioning(false), 600);
    },
    [isTransitioning, totalSlides]
  );

  const goNext = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const goPrev = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  // Autoplay
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      goNext();
    }, 5500);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [goNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        !carouselRef.current?.contains(document.activeElement) &&
        document.activeElement !== carouselRef.current
      )
        return;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goPrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;
    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        goNext();
      } else {
        goPrev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!allSlides || allSlides.length === 0) return null;

  return (
    <div
      ref={carouselRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Ubichem Hero Carousel"
      tabIndex={0}
      className="relative w-full aspect-[1366/630] overflow-hidden focus:outline-none bg-black select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Banner Slides (100% Full Image, Uncropped) */}
      {allSlides.map((slide, index) => (
        <div
          key={index}
          role="group"
          aria-roledescription="slide"
          aria-label={`Slide ${index + 1} of ${totalSlides}`}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover w-full h-full"
            priority={index === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Navigation Arrow - Left */}
      {totalSlides > 1 && (
        <button
          onClick={goPrev}
          aria-label="Previous banner"
          className="absolute left-1.5 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-black/40 hover:bg-black/75 text-white flex items-center justify-center transition-all backdrop-blur-md shadow-lg border border-white/20 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 sm:w-7 sm:h-7" />
        </button>
      )}

      {/* Navigation Arrow - Right */}
      {totalSlides > 1 && (
        <button
          onClick={goNext}
          aria-label="Next banner"
          className="absolute right-1.5 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-black/40 hover:bg-black/75 text-white flex items-center justify-center transition-all backdrop-blur-md shadow-lg border border-white/20 cursor-pointer"
        >
          <ChevronRight className="w-4 h-4 sm:w-7 sm:h-7" />
        </button>
      )}

      {/* Dot Indicators - Bottom Center */}
      {totalSlides > 1 && (
        <div className="absolute bottom-1.5 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 sm:gap-2.5 bg-black/35 px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full backdrop-blur-sm border border-white/10">
          {allSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : undefined}
              className={`h-1.5 sm:h-3 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex ? 'bg-[#C7A831] w-5 sm:w-10' : 'bg-white/60 hover:bg-white/90 w-1.5 sm:w-3'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default HeroCarousel;

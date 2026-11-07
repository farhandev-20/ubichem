'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxProps {
  images: LightboxImage[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

export default function Lightbox({ images, isOpen, onClose, initialIndex = 0 }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Reset index when initialIndex changes or lightbox opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [initialIndex, isOpen]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Keyboard support
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          e.preventDefault();
          onClose();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          goPrev();
          break;
        case 'ArrowRight':
          e.preventDefault();
          goNext();
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, goNext, goPrev]);

  if (!isOpen || !images || images.length === 0) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        aria-label="Close lightbox"
        className="absolute top-4 right-4 z-[61] w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Previous Arrow */}
      {images.length > 1 && (
        <button
          onClick={goPrev}
          aria-label="Previous image"
          className="absolute left-2 sm:left-6 z-[62] w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Image Container - Responsive */}
      <div className="relative w-full h-full max-w-5xl max-h-[82vh] mx-3 sm:mx-16 flex items-center justify-center">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          fill
          className="object-contain p-2"
          sizes="(max-width: 768px) 95vw, 85vw"
          priority
        />
      </div>

      {/* Next Arrow */}
      {images.length > 1 && (
        <button
          onClick={goNext}
          aria-label="Next image"
          className="absolute right-2 sm:right-6 z-[62] w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[61] text-white text-sm bg-black/50 px-4 py-2 rounded-full">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
}

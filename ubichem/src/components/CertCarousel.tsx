'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ZoomIn, ChevronLeft, ChevronRight, Award } from 'lucide-react';
import { certificates } from '@/content/certificates';
import Lightbox from './Lightbox';

const certDetails = [
  {
    title: "ISO 9001:2015 Certified",
    subtitle: "Recognized for excellence in quality management systems in manufacturing agro-inputs.",
  },
  {
    title: "State Quality License",
    subtitle: "Approved by Maharashtra Department of Agriculture for safe and compliant fertilizer production.",
  },
  {
    title: "Export Excellence Recognition",
    subtitle: "Recognized for high-purity agricultural bio-inputs and expanding market contribution.",
  },
];

export function CertCarousel() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  const lightboxImages = certificates.map((cert) => ({
    src: cert.fullImage,
    alt: cert.alt,
  }));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const goNextMobile = () => {
    setMobileIndex((prev) => (prev + 1) % certificates.length);
  };

  const goPrevMobile = () => {
    setMobileIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  return (
    <div className="w-full">
      {/* Desktop 3-Column Grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <div
            key={index}
            onClick={() => openLightbox(index)}
            className="bg-white rounded-3xl p-7 shadow-[0_4px_20px_-2px_rgba(27,94,32,0.06)] border border-border-subtle hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-5">
              <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-surface-container border border-border-subtle/60 flex items-center justify-center p-3">
                <Image
                  src={cert.thumbnail}
                  alt={cert.alt}
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-primary font-bold text-xs shadow-lg">
                    <ZoomIn className="w-4 h-4" />
                    <span>Click to Enlarge</span>
                  </span>
                </div>
              </div>

              <div className="space-y-1.5 text-center">
                <div className="inline-flex items-center gap-1.5 text-harvest-amber font-semibold text-xs uppercase tracking-wider mb-1">
                  <Award className="w-3.5 h-3.5" />
                  <span>Quality Assured</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-primary">
                  {certDetails[index]?.title || cert.alt}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {certDetails[index]?.subtitle}
                </p>
              </div>
            </div>

            <div className="pt-4 text-center">
              <span className="text-xs text-primary font-bold group-hover:underline">
                View Full Certificate →
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Single Card View */}
      <div className="md:hidden">
        <div
          onClick={() => openLightbox(mobileIndex)}
          className="bg-white rounded-3xl p-6 shadow-card border border-border-subtle cursor-pointer"
        >
          <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-surface-container p-3 mb-4">
            <Image
              src={certificates[mobileIndex].thumbnail}
              alt={certificates[mobileIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
          <div className="text-center space-y-1">
            <h3 className="font-heading text-lg font-bold text-primary">
              {certDetails[mobileIndex]?.title || certificates[mobileIndex].alt}
            </h3>
            <p className="text-xs text-on-surface-variant">
              {certDetails[mobileIndex]?.subtitle}
            </p>
          </div>
        </div>

        {/* Mobile Arrows */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={goPrevMobile}
            aria-label="Previous certificate"
            className="w-11 h-11 rounded-full bg-white border border-border-subtle shadow-sm flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-sm font-semibold text-on-surface-variant">
            {mobileIndex + 1} / {certificates.length}
          </span>
          <button
            onClick={goNextMobile}
            aria-label="Next certificate"
            className="w-11 h-11 rounded-full bg-white border border-border-subtle shadow-sm flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      <Lightbox
        images={lightboxImages}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        initialIndex={lightboxIndex}
      />
    </div>
  );
}

export default CertCarousel;

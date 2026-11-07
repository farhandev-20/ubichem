'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ZoomIn } from 'lucide-react';
import { PageBanner } from '@/components/PageBanner';
import Lightbox from '@/components/Lightbox';
import { useLanguage } from '@/i18n/LanguageContext';

const galleryPhotos = [
  {
    src: "/images/banner.jpg",
    alt: "Ubichem agricultural research & field crop development",
    categoryKey: "fieldOps",
  },
  {
    src: "/images/banner1.jpg",
    alt: "Horticulture nutrition and grape vine vitality",
    categoryKey: "horticulture",
  },
  {
    src: "/images/banner3.jpg",
    alt: "Plant nutrition formulation and laboratory packaging",
    categoryKey: "formulations",
  },
  {
    src: "/images/banner4.jpg",
    alt: "Commercial field application and high-yield farming",
    categoryKey: "fieldTrials",
  },
  {
    src: "/images/img1.jpg",
    alt: "Agro chemicals and crop shield formulations",
    categoryKey: "products",
  },
  {
    src: "/images/img2.jpg",
    alt: "Disease resistance and plant immunity inputs",
    categoryKey: "products",
  },
  {
    src: "/images/img4.jpg",
    alt: "Humic acid fertilizers and soil conditioners",
    categoryKey: "products",
  },
  {
    src: "/images/img5.jpg",
    alt: "Keeping quality enhancer for extended shelf life",
    categoryKey: "products",
  },
  {
    src: "/images/img6.jpg",
    alt: "Power foliar micronutrient fertilizer blend",
    categoryKey: "products",
  },
  {
    src: "/images/img7.jpg",
    alt: "Plant growth enhancer and biostimulant bottle",
    categoryKey: "products",
  },
  {
    src: "/images/cer1.jpg",
    alt: "ISO 9001:2015 Quality Management System Certificate",
    categoryKey: "formulations",
  },
  {
    src: "/images/cer2.jpg",
    alt: "Maharashtra State Department Quality License",
    categoryKey: "formulations",
  },
];

export default function GalleryPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categories = [
    { key: "all", label: t.gallery.all },
    { key: "products", label: t.gallery.products },
    { key: "fieldOps", label: t.gallery.fieldOps },
    { key: "horticulture", label: t.gallery.horticulture },
    { key: "formulations", label: t.gallery.formulations },
  ];

  const filteredPhotos =
    activeCategory === "all"
      ? galleryPhotos
      : galleryPhotos.filter((p) => p.categoryKey === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <PageBanner
        title={t.gallery.title}
        subtitle={t.gallery.subtitle}
        breadcrumbs={[
          { label: t.common.home, href: "/" },
          { label: t.gallery.title },
        ]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-12">
        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat.key
                  ? "bg-primary text-white shadow-md scale-105"
                  : "bg-white border border-border-subtle text-on-surface hover:bg-surface-container"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-surface-container cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-108 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium text-white/90 line-clamp-2">
                    {photo.alt}
                  </p>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0 ml-2">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Component */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={filteredPhotos.map((p) => ({
          src: p.src,
          alt: p.alt,
          caption: p.alt,
        }))}
        initialIndex={lightboxIndex}
      />
    </>
  );
}

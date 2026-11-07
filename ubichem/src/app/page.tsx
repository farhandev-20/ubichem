'use client';

import Image from "next/image";
import Link from "next/link";
import {
  Eye,
  Flag,
  TrendingUp,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
  CheckCircle2,
  Users,
} from "lucide-react";
import { heroBanners } from "@/content/banners";
import { homepageProducts } from "@/content/products";
import { HeroCarousel } from "@/components/HeroCarousel";
import { CertCarousel } from "@/components/CertCarousel";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col w-full bg-canvas-bg font-sans">
      {/* 1. HERO CAROUSEL SECTION (100% Full-Size Banners) */}
      <section className="relative w-full bg-[#00450d]" aria-label="Ubichem Hero Banners">
        <HeroCarousel images={heroBanners} />
      </section>

      {/* 2. HERO HIGHLIGHT BAR (Title, Subtext & Action Buttons) */}
      <section className="w-full bg-[#00450d] text-white border-b border-border-subtle py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-3xl">
              <div>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C7A831] text-[#121c2a] font-bold text-xs sm:text-sm shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#121c2a]" />
                  <span>{t.home.heroBadge}</span>
                </span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {t.home.heroHeading}
              </h2>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
                {t.home.heroSubheading}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 shrink-0 w-full lg:w-auto">
              <Link
                href="#products"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-[#C7A831] hover:bg-[#F57F17] text-[#121c2a] font-bold text-base shadow-lg transition-all transform hover:-translate-y-0.5 text-center"
              >
                {t.home.heroPrimaryCta}
              </Link>
              <Link
                href="#welcome"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl border-2 border-white text-white font-bold text-base hover:bg-white/15 transition-all shadow-sm text-center"
              >
                {t.home.heroSecondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WELCOME SECTION (COMPANY PROFILE) */}
      <section className="py-12 sm:py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" id="welcome">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-16 shadow-[0_4px_24px_-2px_rgba(27,94,32,0.06)] border border-border-subtle grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" />
              <span>{t.home.welcomeKicker}</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#121c2a] leading-[1.2] tracking-tight">
              {t.home.welcomeHeading}
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-on-surface-variant leading-relaxed">
              {t.home.welcomeText}
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-base transition-all shadow-md transform hover:-translate-y-0.5"
              >
                <span>{t.home.welcomeCta}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right Column Facility / Heritage Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border-subtle group">
              <div className="relative w-full h-80 sm:h-96 bg-surface-container">
                <Image
                  src="/images/banner1.jpg"
                  alt="Ubichem agricultural research and product manufacturing"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <div className="flex items-center gap-2 text-harvest-amber font-bold text-xs uppercase tracking-wider">
                    <Award className="w-4 h-4" />
                    <span>{t.home.welcomeBadgeYear}</span>
                  </div>
                  <p className="font-heading text-lg font-bold text-white">
                    Sanghvi Quality Products Pvt. Ltd.
                  </p>
                  <p className="text-xs text-white/80">
                    {t.home.welcomeBadgeTrust}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCTS SECTION (OUR OFFERINGS) */}
      <section className="py-16 md:py-24 bg-[#eef4ea] w-full" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-primary font-bold text-xs sm:text-sm uppercase tracking-widest block">
              {t.home.productsKicker}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#121c2a] tracking-tight">
              {t.home.productsHeading}
            </h2>
            <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
              {t.home.productsSubheading}
            </p>
          </div>

          {/* Grid of 6 Featured Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homepageProducts.map((product) => {
              const catData = t.categories[product.slug] || { name: product.name, description: product.description };
              return (
                <div
                  key={product.slug}
                  className="bg-white rounded-2xl p-6 sm:p-7 shadow-[0_4px_16px_-2px_rgba(27,94,32,0.06)] border border-border-subtle flex flex-col justify-between hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <div className="space-y-5">
                    {/* Image container */}
                    <div className="relative w-full h-52 rounded-xl overflow-hidden bg-surface-container p-4">
                      {product.image ? (
                        <Image
                          src={product.image}
                          alt={catData.name}
                          fill
                          className="object-contain p-2 group-hover:scale-108 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-outline text-sm">
                          No image available
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-heading text-xl font-bold text-primary group-hover:text-primary-hover transition-colors">
                        {catData.name}
                      </h3>
                      <p className="text-sm text-on-surface-variant leading-relaxed line-clamp-3">
                        {catData.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-auto border-t border-border-subtle/50">
                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex items-center gap-1.5 text-primary font-bold text-sm hover:text-secondary transition-colors"
                    >
                      <span>{t.home.exploreFormulations}</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View All Products button */}
          <div className="text-center pt-6">
            <Link
              href="/products"
              className="inline-flex items-center gap-2.5 px-9 py-4 rounded-xl bg-[#C7A831] hover:bg-[#F57F17] text-[#121c2a] font-bold text-base shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <span>{t.home.viewAllCategories}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. VISION / MISSION / GOAL SECTION */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vision */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_4px_20px_-2px_rgba(27,94,32,0.06)] border border-border-subtle flex flex-col justify-between space-y-6 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-36 h-36 bg-primary/5 rounded-bl-full pointer-events-none" />
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-primary-container text-white flex items-center justify-center shadow-md">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary pt-1">
                {t.home.visionTitle}
              </h3>
              <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
                &ldquo;{t.home.visionText}&rdquo;
              </p>
            </div>
            <div className="pt-4 border-t border-border-subtle/60 flex items-center gap-2 text-xs font-semibold text-outline uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>Core Pillar</span>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_4px_20px_-2px_rgba(27,94,32,0.06)] border border-border-subtle flex flex-col justify-between space-y-6 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-36 h-36 bg-harvest-amber/10 rounded-bl-full pointer-events-none" />
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#C7A831] text-[#121c2a] flex items-center justify-center shadow-md">
                <Flag className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary pt-1">
                {t.home.missionTitle}
              </h3>
              <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
                &ldquo;{t.home.missionText}&rdquo;
              </p>
            </div>
            <div className="pt-4 border-t border-border-subtle/60 flex items-center gap-2 text-xs font-semibold text-outline uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#C7A831]" />
              <span>Core Pillar</span>
            </div>
          </div>

          {/* Goal */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_4px_20px_-2px_rgba(27,94,32,0.06)] border border-border-subtle flex flex-col justify-between space-y-6 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-36 h-36 bg-secondary/10 rounded-bl-full pointer-events-none" />
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-secondary text-white flex items-center justify-center shadow-md">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary pt-1">
                {t.home.goalTitle}
              </h3>
              <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
                &ldquo;{t.home.goalText}&rdquo;
              </p>
            </div>
            <div className="pt-4 border-t border-border-subtle/60 flex items-center gap-2 text-xs font-semibold text-outline uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-secondary" />
              <span>Core Pillar</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR LEADERSHIP SECTION */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" id="leadership">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest">
            <Users className="w-4 h-4" />
            <span>{t.home.leadershipKicker}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#121c2a] tracking-tight">
            {t.home.leadershipHeading}
          </h2>
          <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
            {t.home.leadershipSubheading}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.home.leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_4px_24px_-2px_rgba(27,94,32,0.06)] border border-border-subtle hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group flex flex-col items-center text-center"
            >
              {/* Photo Frame */}
              <div className="relative w-full aspect-[3/4] max-w-[260px] rounded-2xl overflow-hidden bg-surface-container border-2 border-border-subtle group-hover:border-primary/40 shadow-md mb-6">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Leader Info */}
              <div className="space-y-2 w-full">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#121c2a] group-hover:text-primary transition-colors">
                  {leader.name}
                </h3>
                <div>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs sm:text-sm tracking-wide">
                    {leader.role}
                  </span>
                </div>
                <p className="text-xs text-outline mt-3 pt-3 border-t border-border-subtle/60">
                  {leader.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. QUALITY ASSURANCE / COMPANY CERTIFICATION SECTION */}
      <section className="py-16 md:py-24 bg-[#eef4ea] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
            <span className="text-primary font-bold text-xs uppercase tracking-widest">
              {t.home.certsKicker}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#121c2a] tracking-tight">
              {t.home.certsHeading}
            </h2>
            <p className="text-base sm:text-lg text-on-surface-variant">
              {t.home.certsSubheading}
            </p>
            <p className="text-xs text-primary font-semibold">
              {t.home.certsHint}
            </p>
          </div>
          <CertCarousel />
        </div>
      </section>
    </div>
  );
}

'use client';

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Factory, Globe2, ShieldCheck } from "lucide-react";
import { PageBanner } from "@/components/PageBanner";
import { useLanguage } from "@/i18n/LanguageContext";

export function AboutContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageBanner
        title={t.about.title}
        subtitle={t.about.subtitle}
        breadcrumbs={[
          { label: t.common.home, href: "/" },
          { label: t.about.title },
        ]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-16">
        {/* Company Overview Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-[0_4px_24px_-2px_rgba(27,94,32,0.06)] border border-border-subtle grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest">
              <Factory className="w-4 h-4" />
              <span>{t.about.establishedBadge}</span>
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#121c2a] tracking-tight leading-tight">
              {t.about.heading}
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-on-surface-variant leading-relaxed">
              {t.about.story.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-base transition-all shadow-md"
              >
                <span>{t.common.exploreProducts}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-border-subtle text-on-surface hover:bg-surface-container font-semibold text-base transition-all"
              >
                <span>{t.common.contactUs}</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border-subtle">
              <div className="relative w-full h-80 sm:h-[420px] bg-surface-container">
                <Image
                  src="/images/banner3.jpg"
                  alt="Ubichem agricultural research and product manufacturing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <span className="px-3 py-1 bg-harvest-amber text-[#121c2a] rounded-full text-xs font-bold inline-block">
                    Pioneers in Crop Nutrition
                  </span>
                  <h3 className="font-heading text-xl font-bold text-white">
                    Sanghvi Quality Products Pvt. Ltd.
                  </h3>
                  <p className="text-xs text-white/80">
                    MIDC Industrial Area, Barshi - 413401, Solapur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {t.about.stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 sm:p-8 text-center border border-border-subtle shadow-card space-y-2"
            >
              <span className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary block">
                {stat.value}
              </span>
              <span className="text-sm sm:text-base font-semibold text-on-surface-variant block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Vision / Mission Highlights */}
        <div className="bg-[#eef4ea] rounded-3xl p-8 sm:p-12 border border-border-subtle">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="font-heading text-2xl font-bold text-primary flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-primary" />
                <span>{t.about.qualityTitle}</span>
              </h3>
              <p className="text-base text-on-surface-variant leading-relaxed">
                &ldquo;{t.about.qualityText}&rdquo;
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-heading text-2xl font-bold text-primary flex items-center gap-2">
                <Globe2 className="w-6 h-6 text-harvest-amber" />
                <span>{t.about.goalTitle}</span>
              </h3>
              <p className="text-base text-on-surface-variant leading-relaxed">
                &ldquo;{t.about.goalText}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

